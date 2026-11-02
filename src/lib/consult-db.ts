import "server-only";
import { DatabaseSync } from "node:sqlite";
import { mkdirSync } from "node:fs";
import path from "node:path";
export type Inquiry = {id:string; name:string;phone:string;program:string;message:string;created_at:number;seen:number};
let db:DatabaseSync|undefined;
export function database() {
 if(!db) {
  // Vercel 서버리스는 /tmp 외에는 쓰기가 불가능하다. /tmp는 인스턴스가 바뀌면 비워지므로 상담 기록의 원본은 알림 메일이다.
  const file=process.env.CONSULT_DB_PATH || (process.env.VERCEL ? path.join("/tmp","consultations.sqlite") : path.join(process.cwd(),"data","consultations.sqlite"));
  mkdirSync(path.dirname(file),{recursive:true,mode:0o700});
  db=new DatabaseSync(file);
  db.exec(`PRAGMA journal_mode=WAL; PRAGMA busy_timeout=5000; PRAGMA secure_delete=ON;
   CREATE TABLE IF NOT EXISTS inquiries(id TEXT PRIMARY KEY,name TEXT NOT NULL,phone TEXT NOT NULL,program TEXT NOT NULL,message TEXT NOT NULL,created_at INTEGER NOT NULL,seen INTEGER NOT NULL DEFAULT 0,consent_version TEXT NOT NULL);
   CREATE TABLE IF NOT EXISTS throttle(bucket TEXT PRIMARY KEY,started INTEGER NOT NULL,count INTEGER NOT NULL);
   CREATE INDEX IF NOT EXISTS inquiry_created ON inquiries(created_at);`);
  setInterval(()=>{db?.prepare("DELETE FROM inquiries WHERE created_at < ?").run(Date.now()-90*86400000);},3600000).unref();
 }
 db.prepare("DELETE FROM inquiries WHERE created_at < ?").run(Date.now()-90*86400000);
 db.prepare("DELETE FROM throttle WHERE started < ?").run(Date.now()-86400000);
 return db;
}
export function rateLimit(bucket:string,limit:number,windowMs:number) {
 const db=database(),now=Date.now();
 const row=db.prepare("INSERT INTO throttle(bucket,started,count) VALUES(?,?,1) ON CONFLICT(bucket) DO UPDATE SET count=CASE WHEN started < ? THEN 1 ELSE count+1 END, started=CASE WHEN started < ? THEN excluded.started ELSE started END RETURNING count").get(bucket,now,now-windowMs,now-windowMs) as {count:number};
 return row.count<=limit;
}

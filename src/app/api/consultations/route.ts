import { randomUUID,createHash } from "node:crypto";
import { database,rateLimit } from "@/lib/consult-db";
import { readBody,sameOrigin } from "@/lib/consult-auth";
import { programs } from "@/data/programs";
export const runtime="nodejs";
export async function POST(request:Request){
 if(!sameOrigin(request))return Response.json({error:"잘못된 요청입니다."},{status:403});
 try {
  const body=await readBody(request);
  const str=(key:string)=>typeof body[key]==="string"?(body[key] as string).trim():"";
  const name=str("name"),phone=str("phone").replace(/[\s()-]/g,""),program=str("program"),message=str("message");
  if(str("website"))return Response.json({error:"다시 시도해 주세요."},{status:400});
  if(!name||name.length>60||!/^0\d{8,10}$/.test(phone)||message.length>2000||body.consent!==true||(!programs.some(p=>p.name===program)&&program!=="상담 후 결정"))return Response.json({error:"이름, 연락처, 관심 수업과 개인정보 동의를 확인해 주세요."},{status:400});
  const key=createHash("sha256").update(phone).digest("hex");
  if(!rateLimit("intake",100,60000)||!rateLimit("phone:"+key,3,3600000))return Response.json({error:"신청이 반복되었습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요."},{status:429});
  const id=randomUUID();
  database().prepare("INSERT INTO inquiries(id,name,phone,program,message,created_at,consent_version) VALUES(?,?,?,?,?,?,?)").run(id,name,phone,program,message,Date.now(),"2026-09-14");
  return Response.json({ok:true,id},{status:201,headers:{"Cache-Control":"no-store"}});
 }catch(error){if(error instanceof SyntaxError||error instanceof Error&&["empty","large","invalid"].includes(error.message))return Response.json({error:"신청 내용을 확인해 주세요."},{status:400});return Response.json({error:"접수하지 못했습니다. 잠시 후 다시 시도하거나 전화로 문의해 주세요."},{status:503});}
}

import "server-only";
import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";
export const sessionCookie="ninew_admin";
function secret(){return process.env.ADMIN_PASSWORD || "";}
function equal(a:string,b:string){const x=Buffer.from(a),y=Buffer.from(b);return x.length===y.length&&timingSafeEqual(x,y);}
export function passwordMatches(password:string){return secret().length>=32&&equal(password,secret());}
export function sessionToken(){const exp=String(Date.now()+8*3600000);return exp+"."+createHmac("sha256",secret()).update(exp).digest("hex");}
export async function isAdmin(){if(secret().length<32)return false; const token=(await cookies()).get(sessionCookie)?.value||"";const [exp,sig]=token.split(".");return /^\d+$/.test(exp||"")&&Number(exp)>Date.now()&&Number(exp)<=Date.now()+8*3600000&&equal(sig||"",createHmac("sha256",secret()).update(exp).digest("hex"));}
export function sameOrigin(request:Request){const origin=request.headers.get("origin");if(!origin)return false;try{return new URL(origin).host===request.headers.get("host");}catch{return false;}}
export async function readBody(request:Request):Promise<Record<string,unknown>> {
 const reader=request.body?.getReader();if(!reader)throw Error("empty");
 const chunks:Uint8Array[]=[];let size=0;
 while(true){const {value,done}=await reader.read();if(done)break;size+=value.byteLength;if(size>12000){await reader.cancel();throw Error("large");}chunks.push(value);}
 const body=JSON.parse(Buffer.concat(chunks).toString("utf8"));
 if(!body||Array.isArray(body)||typeof body!=="object")throw Error("invalid");
 return body;
}

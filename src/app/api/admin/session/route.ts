import { cookies } from "next/headers";
import { passwordMatches,readBody,sameOrigin,sessionCookie,sessionToken } from "@/lib/consult-auth";
import { rateLimit } from "@/lib/consult-db";
export const runtime="nodejs";
export async function POST(request:Request){
 if(!sameOrigin(request))return new Response(null,{status:403});
 if(!process.env.ADMIN_PASSWORD||process.env.ADMIN_PASSWORD.length<32)return Response.json({error:"관리자 비밀번호 설정이 필요합니다."},{status:503});
 if(!rateLimit("admin-login",20,15*60000))return Response.json({error:"로그인 시도가 많습니다. 15분 뒤 다시 시도해 주세요."},{status:429});
 try{const body=await readBody(request);if(typeof body.password!=="string"||!passwordMatches(body.password))return Response.json({error:"비밀번호를 확인해 주세요."},{status:401});
 (await cookies()).set(sessionCookie,sessionToken(),{httpOnly:true,sameSite:"strict",secure:process.env.NODE_ENV==="production",path:"/",maxAge:8*3600});return Response.json({ok:true});
 }catch{return Response.json({error:"로그인하지 못했습니다."},{status:400});}
}
export async function DELETE(request:Request){if(!sameOrigin(request))return new Response(null,{status:403});(await cookies()).delete(sessionCookie);return Response.json({ok:true});}

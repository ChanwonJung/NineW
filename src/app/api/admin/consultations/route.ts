import { database } from "@/lib/consult-db";
import { isAdmin,readBody,sameOrigin } from "@/lib/consult-auth";
export const runtime="nodejs";
export async function GET(){if(!await isAdmin())return new Response(null,{status:401});const db=database();return Response.json({items:db.prepare("SELECT id,name,phone,program,message,created_at,seen FROM inquiries ORDER BY created_at DESC LIMIT 200").all(),unread:(db.prepare("SELECT count(*) AS n FROM inquiries WHERE seen=0").get() as {n:number}).n},{headers:{"Cache-Control":"no-store"}});}
export async function PATCH(request:Request){
 if(!sameOrigin(request)||!await isAdmin())return new Response(null,{status:403});
 try{const body=await readBody(request);if(typeof body.id!=="string")return new Response(null,{status:400});database().prepare("UPDATE inquiries SET seen=1 WHERE id=?").run(body.id);return Response.json({ok:true});}catch{return new Response(null,{status:400});}
}
export async function DELETE(request:Request){
 if(!sameOrigin(request)||!await isAdmin())return new Response(null,{status:403});
 try{const body=await readBody(request);if(typeof body.id!=="string")return new Response(null,{status:400});database().prepare("DELETE FROM inquiries WHERE id=?").run(body.id);return Response.json({ok:true});}catch{return new Response(null,{status:400});}
}

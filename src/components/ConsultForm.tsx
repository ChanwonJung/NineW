"use client";
import {useRef,useState,type FormEvent} from "react";
import Link from "next/link";
import { programs } from "@/data/programs";
import { trackEvent } from "@/lib/analytics";
const field="mt-2 w-full border border-line bg-paper px-4 py-3 text-base text-ink outline-none focus:border-accent";
export default function ConsultForm(){
 const [status,setStatus]=useState<"idle"|"sending"|"done">("idle"),[error,setError]=useState("");
 const busy=useRef(false);
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();if(busy.current)return;busy.current=true;setStatus("sending");setError("");
  const form=new FormData(e.currentTarget);
  try{const res=await fetch("/api/consultations",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:form.get("name"),phone:form.get("phone"),program:form.get("program"),message:form.get("message"),consent:form.get("consent")==="on",website:form.get("website")})});const data=await res.json();if(!res.ok)throw Error(data.error||"접수하지 못했습니다.");setStatus("done");trackEvent("generate_lead",{form_location:"visit_page"});}
  catch(e){setError(e instanceof Error?e.message:"연결을 확인하고 다시 시도해 주세요.");setStatus("idle");}finally{busy.current=false;}
 }
 if(status==="done")return <div role="status" className="border border-line bg-paper p-8"><h3 className="text-2xl">상담 신청이 접수되었습니다.</h3><p className="mt-4 leading-relaxed text-muted">남겨주신 내용을 확인한 뒤 연락드리겠습니다.</p></div>;
 return <form onSubmit={submit} className="space-y-5">
 <div className="grid gap-5 md:grid-cols-3"><label>이름<input className={field} name="name" autoComplete="name" required maxLength={60}/></label><label>연락처<input className={field} name="phone" type="tel" autoComplete="tel" required maxLength={20} placeholder="010-0000-0000"/></label>
 <label className="block">관심 있는 수업<select className={field} name="program" required defaultValue=""><option value="" disabled>선택해 주세요</option>{programs.map(p=><option key={p.slug} value={p.name}>{p.name}</option>)}<option value="상담 후 결정">상담 후 결정</option></select></label></div>
 <label className="block">하고 싶은 이야기 <span className="text-sm text-muted">(선택)</span><textarea className={field} name="message" rows={7} maxLength={2000} placeholder="현재 학년, 준비 상황, 지원 계획 등을 편하게 적어 주세요."/></label>
 <div hidden aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
 <details className="text-sm leading-relaxed text-muted"><summary className="cursor-pointer">개인정보 수집·이용 안내</summary><p className="mt-3">NINE·W는 상담 연락과 수업 안내를 위해 이름·연락처·관심 수업 및 선택 입력한 내용을 수집합니다. 접수일로부터 최대 90일 보관하며, 삭제 요청은 학원 전화로 할 수 있습니다. 동의를 거부할 수 있으나 온라인 상담 접수는 제한됩니다. 자세한 내용은 <Link href="/privacy" className="text-accent hover:underline">개인정보 처리방침</Link>을 확인해 주세요.</p></details>
 <label className="flex items-start gap-3 text-sm"><input name="consent" type="checkbox" required className="mt-1"/>상담 목적의 개인정보 수집·이용에 동의합니다. (필수)</label>
 {error&&<p role="alert" className="text-sm text-red-700">{error}</p>}
 <button disabled={status==="sending"} className="bg-ink px-7 py-4 text-paper disabled:opacity-50" type="submit">{status==="sending"?"접수 중…":"상담 신청하기"}</button>
 </form>;
}

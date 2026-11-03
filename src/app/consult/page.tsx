import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ConsultForm from "@/components/ConsultForm";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "상담 신청",
  description: "NINE·W 상담 신청서를 남겨 주세요. 확인 후 연락드립니다.",
};

export default function ConsultPage() {
  return (
    <>
      <PageHero title="NINE·W 상담 신청" description="편한 시간에 연락드릴 수 있도록 아래 내용을 남겨 주세요." />
      <section className="consult-page">
        <div className="consult-page-inner">
          <aside className="consult-aside">
            <div className="consult-aside-card">
              <h2>바로 문의하기</h2>
              <ul className="consult-contact">
                <li><span>전화</span><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></li>
                <li><span>인스타그램</span><a href={siteConfig.instagramUrl} target="_blank" rel="noopener noreferrer">@{siteConfig.instagramHandle}</a></li>
                <li><span>수업 시간</span><p>{siteConfig.classHours.days}<br />{siteConfig.classHours.afternoon}<br />{siteConfig.classHours.evening}</p></li>
              </ul>
            </div>
          </aside>
          <div className="consult-form-card">
            <h2>상담 신청서</h2>
            <p>남겨 주신 정보는 상담 연락 목적으로만 사용합니다.</p>
            <div className="consult-form-body">
              <ConsultForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

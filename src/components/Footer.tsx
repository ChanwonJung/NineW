import BrandLogo from "@/components/BrandLogo";
import { siteConfig } from "@/data/site";

export default function Footer() {
  const { business } = siteConfig;

  return (
    <footer className="site-footer">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* 위: 왼쪽에 로고와 사업자 정보(세로), 오른쪽에 연락처. 전화·이메일은 바로 누를 수 있게 크게 둔다. */}
        <div className="footer-top">
          <div className="footer-brand">
            <BrandLogo />
            <dl className="footer-business">
              <div><dt>상호명</dt><dd>{business.name}</dd></div>
              <div><dt>대표</dt><dd>{business.representative}</dd></div>
              <div><dt>등록번호</dt><dd>{business.registrationNumber}</dd></div>
              <div><dt>주소</dt><dd>{business.address}</dd></div>
            </dl>
          </div>
          <dl className="footer-contact">
            <div>
              <dt>Tel</dt>
              <dd><a href={siteConfig.phoneHref}>{siteConfig.phone}</a></dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd><a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a></dd>
            </div>
          </dl>
        </div>

        {/* 아래: 저작권은 가운데 */}
        <p className="footer-copyright">
          Copyright © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

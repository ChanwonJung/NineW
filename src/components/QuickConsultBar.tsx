"use client";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";
import { privacyEffectiveDate, privacySections } from "@/data/privacy";

const DISMISS_KEY = "quick-consult-dismissed";

export default function QuickConsultBar() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const busy = useRef(false);
  const policy = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (sessionStorage.getItem(DISMISS_KEY) !== "1") setVisible(true);
      } catch {
        setVisible(true);
      }
    }, 0);
    return () => clearTimeout(t);
  }, []);

  // 히어로 슬라이드 등이 하단 상담 바에 가려지지 않도록 바 높이를 CSS 변수로 공유한다.
  useEffect(() => {
    const root = document.documentElement;
    const bar = document.querySelector<HTMLElement>(".quick-consult-bar");
    // 바를 닫아도 마지막으로 잰 높이를 유지해, 슬라이드 크기가 바뀌지 않게 한다.
    if (!bar) return;
    const sync = () => root.style.setProperty("--quick-bar-h", `${bar.offsetHeight}px`);
    sync();
    const observer = new ResizeObserver(sync);
    observer.observe(bar);
    return () => observer.disconnect();
  }, [visible, pathname, status]);

  if (pathname?.startsWith("/admin") || !visible) return null;

  function dismiss() {
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {}
    setVisible(false);
  }

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busy.current) return;
    busy.current = true;
    setStatus("sending");
    setError("");
    const form = new FormData(e.currentTarget);
    try {
      const res = await fetch("/api/consultations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          program: "상담 후 결정",
          message: "",
          consent: form.get("consent") === "on",
          website: form.get("website"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "접수하지 못했습니다.");
      setStatus("done");
      trackEvent("generate_lead", { form_location: "quick_bar" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "연결을 확인하고 다시 시도해 주세요.");
      setStatus("idle");
    } finally {
      busy.current = false;
    }
  }

  return (
    <div className="quick-consult-bar" role="complementary" aria-label="빠른 상담 신청">
      <div className="quick-consult-inner">
        {status === "done" ? (
          <p className="quick-consult-done">상담 신청이 접수되었습니다. 확인 후 연락드리겠습니다.</p>
        ) : (
          <form onSubmit={submit} className="quick-consult-form">
            <span className="quick-consult-label">
              <span className="quick-consult-title">빠른 상담 신청</span>
            </span>
            <span className="quick-consult-fields">
              <input name="name" type="text" placeholder="이름" required maxLength={60} autoComplete="name" />
              <input name="phone" type="tel" placeholder="연락처" required maxLength={20} autoComplete="tel" />
              <div hidden aria-hidden="true">
                <label>
                  Website
                  <input name="website" tabIndex={-1} autoComplete="off" />
                </label>
              </div>
              <label className="quick-consult-consent">
                <input name="consent" type="checkbox" required />
                <span>
                  <button type="button" onClick={() => policy.current?.showModal()}>개인정보 수집·이용</button>&nbsp;동의
                </span>
              </label>
            </span>
            <button type="submit" className="quick-consult-submit" disabled={status === "sending"}>
              {status === "sending" ? (
                "접수 중…"
              ) : (
                <>
                  상담 신청 <span aria-hidden="true">↗</span>
                </>
              )}
            </button>
            {error && (
              <span role="alert" className="quick-consult-error">
                {error}
              </span>
            )}
          </form>
        )}
        <button type="button" aria-label="배너 닫기" className="quick-consult-close" onClick={dismiss}>
          닫기
        </button>
      </div>
      {/* 별도 페이지로 이동하지 않고 상담 바 안에서 처리방침을 읽을 수 있게 한다. 바깥(배경)을 누르면 닫힌다. */}
      <dialog ref={policy} className="quick-consult-policy" aria-labelledby="quick-consult-policy-title" onClick={e => { if (e.target === e.currentTarget) e.currentTarget.close(); }}>
        <div className="quick-consult-policy-body">
          <h2 id="quick-consult-policy-title">개인정보 처리방침</h2>
          {privacySections.map(section => (
            <section key={section.title}>
              <h3>{section.title}</h3>
              <p>{section.body}</p>
            </section>
          ))}
          <p className="quick-consult-policy-date">시행일: {privacyEffectiveDate}</p>
        </div>
        <form method="dialog" className="quick-consult-policy-actions">
          <button type="submit">확인</button>
        </form>
      </dialog>
    </div>
  );
}

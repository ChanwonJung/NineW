import "server-only";
import nodemailer from "nodemailer";
import type { Inquiry } from "@/lib/consult-db";

const notifyTo = process.env.CONSULT_NOTIFY_EMAIL || "ninew_studio@naver.com";

function transport() {
  const user = process.env.NAVER_USER;
  const pass = process.env.NAVER_APP_PASSWORD;
  if (!user || !pass) return undefined;
  return nodemailer.createTransport({ host: "smtp.naver.com", port: 587, secure: false, auth: { user, pass } });
}

export async function sendConsultationEmail(inquiry: Omit<Inquiry, "seen">) {
  const mailer = transport();
  if (!mailer) {
    console.warn("NAVER_USER/NAVER_APP_PASSWORD not set — skipping consultation email");
    return;
  }
  try {
    await mailer.sendMail({
      from: `NINE·W 상담 신청 <${process.env.NAVER_USER}>`,
      to: notifyTo,
      replyTo: inquiry.phone,
      subject: `[NINE·W] 상담 신청 - ${inquiry.name}`,
      text: `이름: ${inquiry.name}\n연락처: ${inquiry.phone}\n관심 수업: ${inquiry.program}\n내용: ${inquiry.message || "(작성 안 함)"}\n\n접수 시각: ${new Date(inquiry.created_at).toLocaleString("ko-KR")}`,
    });
  } catch (error) {
    console.error("Failed to send consultation email", error);
  }
}

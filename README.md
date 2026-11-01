# NINE·W 홈페이지

유학미술 포트폴리오 학원 NINE·W의 공식 홈페이지입니다. Next.js(App Router) + TypeScript + Tailwind CSS로 만들었습니다.

## 로컬 실행 방법

이 폴더는 `\\wsl$\Ubuntu\home\cw\나인더블유 홈페이지` (Windows) / `/home/cw/나인더블유 홈페이지` (WSL)에 있습니다.

**중요:** 이 프로젝트는 반드시 **WSL(Ubuntu) 안에서** 실행해야 합니다. Windows 쪽 PowerShell/cmd는 `\\wsl$` UNC 경로에서 npm 스크립트(내부적으로 cmd.exe 사용)를 제대로 실행하지 못합니다. 또한 `/home/cw/.npmrc`에 Linux 전용 `prefix` 설정이 있어, Windows 쪽 npm/npx로 이 폴더 상위에서 명령을 실행하면 충돌할 수 있습니다.

```bash
# Windows 터미널(PowerShell)에서 WSL의 Ubuntu 배포판으로 진입
wsl -d Ubuntu

# WSL 안에서
cd "/home/cw/나인더블유 홈페이지"
npm install   # 최초 1회 또는 package.json 변경 시
npm run dev
```

브라우저에서 http://localhost:3000 을 엽니다. (WSL2 환경에 따라 localhost 포트가 Windows로 자동 전달되지 않을 수 있습니다. 안 열리면 `wsl hostname -I`로 확인한 WSL IP로 접속해 보세요.)

그 외 명령:

```bash
npm run lint    # ESLint
npm run build   # 프로덕션 빌드(타입 체크 포함)
```

## 폴더 구조

```
src/
  app/            # 라우트별 페이지 (App Router)
  components/     # 재사용 컴포넌트 (Header, Footer, ConsultForm 등)
  data/           # 콘텐츠 데이터 (site.ts, programs.ts, results.ts, faq.ts)
public/
  images/real/        # 실사 사진만 (게시 동의 확인 후 추가)
  images/generated/   # AI 생성 이미지만 (실사와 절대 섞지 않기)
```

콘텐츠를 고칠 때는 대부분 `src/data/*.ts` 파일만 수정하면 됩니다. 페이지 문구를 통째로 바꾸려면 `src/app/**/page.tsx`를 수정하세요.

## 지금까지 반영한 내용

`academy-blog` 레포(`config/academy.md`, `content/drafts/*`, `data/*`)에서 담당자가 확인한 내용만 사용했습니다. 확인되지 않은 정보는 각 페이지와 데이터 파일에 `[확인 필요]`로 표시해 두었습니다.

- 홈 / 학원 소개 / 프로그램 / 합격 실적 / 오시는 길·상담 신청 폼: 확정된 내용으로 채움
- 학생 후기, 소식(블로그): 동의된 자료·게시글이 없어 "준비 중" 안내만 표시
- 상담 신청 폼: 화면과 입력값 검증만 구현했고, 실제 접수(이메일/스프레드시트/CRM 연동)는 아직 연결하지 않았습니다. `src/components/ConsultForm.tsx`의 TODO 참고

### 실사 사진

`academy-blog/assets/real/asset-register.md`에서 **"인물 없음" 또는 "얼굴 미노출" + 작품/게시 공개 동의가 이미 확인된 사진만** 골라 `public/images/real/`에 넣었습니다 (홈 히어로, 프로그램 카드, 학원 소개, 학생 작품 갤러리에 사용). 목록과 문구는 `src/data/images.ts`에 있습니다.

- 아직 넣지 않은 것: 정석희 원장님 프로필 사진 — asset-register에 "게시 범위 확인 필요"로 표시되어 있어 담당자 확인 후 추가하는 게 안전합니다.
- 갤러리는 이제 "준비 중"이 아니라 동의된 학생 작업 9점을 실제로 보여 줍니다. 이름 등 식별 정보는 넣지 않았고, 더 추가하려면 `src/data/images.ts`의 `galleryGroups`에 항목을 더하면 됩니다.

## 다음 단계 (확인·결정 필요)

- [ ] **도메인 연결**: co.kr 또는 .com 중 결정 후 Vercel에 연결 (지금은 로컬 개발까지만 진행했고, 배포는 하지 않았습니다)
- [ ] **상담 신청 폼 백엔드**: 제출 데이터를 어디로 보낼지 결정 (이메일 API, 구글 시트, CRM 등)
- [ ] **정확한 지번/도로명 주소**, 건물 출입 안내 (`src/data/site.ts`의 `address.fullAddress`)
- [ ] **선생님 소개**: 원장님 외 전공 선생님들의 이름·전공·이력 공개 범위
- [ ] **합격 실적 상세**: 합격 연도, 인원, 장학금 등 정량 수치 (근거 자료 확인 후 `src/data/results.ts`에 추가)
- [ ] **학생 후기 게시 동의**: 동의된 사례가 확인되면 `/reviews` 페이지 교체 (갤러리는 이미 실제 이미지로 교체함)
- [ ] **원장님 프로필 사진**: "게시 범위 확인" 후 학원 소개 페이지에 추가할지 결정
- [ ] **실사 사진 추가**: 더 많은 학생 작업이 확인되면 `src/data/images.ts`의 `galleryGroups`에 추가
- [ ] **자주 묻는 질문**: 실제로 자주 받는 질문 목록 확인 후 `src/data/faq.ts`에 추가
- [ ] **개인정보 처리방침**: 상담 폼에 실제 처리방침 링크 연결

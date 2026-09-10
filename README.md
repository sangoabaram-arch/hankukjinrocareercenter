# 한국진로커리어센터

**웹사이트 소스코드 · 설치 및 운영 안내**

한국진로커리어센터의 기관 소개, 프로그램 안내, 상담신청, 공지·소식과 AI 안내 챗봇을 제공하는 웹사이트입니다. 이 문서는 전달받은 소스코드를 실행하고, 콘텐츠를 수정하고, 운영 환경에 배포하는 담당자를 위한 안내서입니다.

| 항목 | 내용 |
| --- | --- |
| 사이트 도메인 | `https://hankukjinrocareercenter.com` |
| 애플리케이션 | Next.js 16 · React 19 · TypeScript |
| 스타일 | Tailwind CSS 4 |
| 배포 구성 | Cloudflare Workers · OpenNext |
| 설치 검증 환경 | Node.js 24 · npm |
| 외부 서비스 | Kakao Maps · Anthropic API · Cloudflare 이메일 바인딩 |

정확한 패키지 버전은 `package-lock.json`에 기록되어 있습니다.

## 1. 전달 파일 안내

압축을 해제하면 `hankukjinrocareercenter` 폴더가 생성됩니다. 이 폴더 안의 `package.json`이 있는 위치에서 모든 명령을 실행합니다.

전달본에는 화면 소스, 서버 API, 이미지·영상, 상담 접수원서, 설치·빌드·배포 설정이 포함됩니다. 별도 전달 ZIP에는 실제 환경 설정인 `.env`가 포함되며, Git 저장소에는 설정 항목을 설명하는 `.env.example`만 포함됩니다.

`node_modules`와 빌드 결과는 설치·빌드 과정에서 생성됩니다. HTML 파일을 더블클릭하거나 압축파일을 일반 정적 호스팅에 업로드하는 방식으로는 서버 API까지 실행되지 않습니다.

## 2. 처음 실행하기

### 준비

Node.js와 npm을 설치한 뒤 터미널에서 버전을 확인합니다.

```sh
node --version
npm --version
```

전달받은 폴더를 열고 `.env`가 `package.json`과 같은 위치에 있는지 확인합니다. 파일 탐색기에서 보이지 않는 경우 숨김 파일 표시를 켜서 확인합니다.

### 의존성 설치 및 로컬 실행

```sh
npm ci
npm run dev
```

터미널에 표시되는 로컬 주소를 브라우저로 엽니다. 기본 주소는 `http://localhost:3000`이며, 해당 포트가 사용 중이면 터미널에 다른 주소가 표시될 수 있습니다. 실행을 종료할 때는 터미널에서 `Ctrl+C`를 누릅니다.

`npm ci`는 전달된 잠금 파일에 맞춰 의존성을 설치합니다. 최초 설치에는 인터넷 연결이 필요합니다.

### 배포 전 검사

```sh
npm run build
npm run lint
npm run typecheck
npm run start
```

`build`는 운영용 결과와 Next.js 타입 선언을 생성하고, `lint`와 `typecheck`는 코드 규칙 및 타입 오류를 검사합니다. `start`는 생성된 Next.js 빌드를 로컬에서 실행합니다. Cloudflare 배포는 아래 별도 절차를 따릅니다.

## 3. 환경 설정

### 설정 파일의 역할

| 위치 | 용도 |
| --- | --- |
| `.env` | 로컬 실행·빌드에 사용하는 실제 설정. 전달 ZIP에 포함 |
| `.env.example` | 필요한 환경변수 이름과 예시. 실제 키로 사용하지 않음 |
| `wrangler.jsonc` | Cloudflare Worker, 이메일 바인딩 및 공개 운영 설정 |
| Cloudflare Worker의 Secrets | 운영 서버에서 사용하는 API 비밀키 |

`.env`를 새로 만드는 경우 `.env.example`을 복사한 뒤 실제 값을 입력합니다. `.env`를 수정한 후에는 실행 중인 서버를 재시작합니다.

### 환경변수 목록

| 변수 | 용도 | 적용 시점 |
| --- | --- | --- |
| `NEXT_PUBLIC_KAKAO_MAP_JS_KEY` | 오시는 길의 카카오 지도 JavaScript 키 | 로컬 실행·사이트 빌드 시 |
| `ANTHROPIC_API_KEY` | AI 안내 챗봇의 서버 API 키 | 로컬 `.env` / 운영 Worker Secrets |
| `ANTHROPIC_MODEL` | 챗봇이 사용할 모델 이름 | 로컬 `.env` / 운영 `wrangler.jsonc`의 `vars` |
| `ANTHROPIC_WORKSPACE_ID` | 필요 시 사용하는 Anthropic 워크스페이스 지정값. 선택 항목 | 로컬 `.env` / 운영 Worker 설정 |
| `CONTACT_EMAIL_TO` | 상담신청 수신 이메일 | 로컬 `.env` / 운영 `vars` |
| `CONTACT_EMAIL_FROM` | 상담신청 발신 이메일 | 로컬 `.env` / 운영 `vars` |

카카오 지도 키는 브라우저에 사용되는 공개 키입니다. 카카오 앱에 실제 이용 도메인을 허용해야 하며, 키를 변경한 경우 다시 빌드·배포해야 합니다.

`ANTHROPIC_API_KEY`는 서버 전용 비밀키입니다. `.env` 전체를 `public/`에 복사하거나 Git에 추가하지 않습니다. ZIP의 `.env`가 Cloudflare 운영 Secrets에 자동으로 등록되는 것은 아닙니다.

## 4. 기능별 운영 조건

### 상담신청

개인 상담과 기업·기관 문의는 `/api/contact`에서 입력값을 검사한 뒤 이메일로 전송합니다. 현재 구현은 메일 접수 방식이며, 별도의 신청 관리 데이터베이스나 관리자 화면은 포함되어 있지 않습니다.

운영 환경에는 다음 설정이 필요합니다.

- `CONTACT_EMAIL`이라는 이름의 Cloudflare 이메일 바인딩
- `CONTACT_EMAIL_TO`와 일치하는 허용 수신 주소
- `CONTACT_EMAIL_FROM`과 일치하는 허용 발신 주소

수신·발신 주소를 변경할 때는 `wrangler.jsonc`의 `vars`와 `send_email` 설정을 함께 확인합니다. 로컬 화면이 정상적으로 열리더라도 Cloudflare 메일 바인딩이 없으면 실제 메일 접수는 작동하지 않습니다.

### AI 안내 챗봇

브라우저의 질문을 `/api/chat`이 받아 Anthropic API에 전달합니다. API 키와 이용 가능한 모델 설정이 필요하며, 외부 API 사용에는 해당 계정의 이용 조건과 비용이 적용됩니다.

현재 소스는 간단한 안내 응답을 제공하는 연결 구성입니다. 센터의 확정 정보가 필요한 질문에는 상담신청을 안내하도록 설정되어 있으며, 센터 전용 지식 검색이나 상담 이력 저장 기능은 포함되어 있지 않습니다.

### 지도 및 다운로드

오시는 길 지도는 카카오 지도 키와 도메인 허용 설정이 필요합니다. 상담 접수원서는 `public/진로상담_접수원서.docx`에서 제공하므로, 원서를 교체할 때는 같은 경로와 파일명을 유지하면 기존 다운로드 링크를 사용할 수 있습니다.

## 5. Cloudflare 배포

이 프로젝트에는 Cloudflare Workers용 OpenNext 설정이 포함되어 있습니다. 배포 담당 계정에 해당 Worker와 도메인을 관리할 권한이 있어야 합니다.

### 배포 전 확인

1. `wrangler.jsonc`의 Worker 이름과 `WORKER_SELF_REFERENCE` 서비스 이름이 배포 대상과 일치하는지 확인합니다.
2. 운영 이메일의 발신·수신 주소와 `CONTACT_EMAIL` 바인딩을 확인합니다.
3. 대상 Worker의 Secrets에 `ANTHROPIC_API_KEY`를 등록합니다. 필요하면 워크스페이스 설정도 등록합니다.
4. 빌드 환경에 `NEXT_PUBLIC_KAKAO_MAP_JS_KEY`가 준비되어 있는지 확인합니다.
5. 새 계정이나 새 Worker로 이전한다면 사용자 지정 도메인과 DNS 연결도 확인합니다.

### 배포 실행

```sh
npx wrangler login
npm run deploy
```

`deploy` 명령은 OpenNext로 Cloudflare용 결과를 생성한 뒤 Worker에 업로드합니다. 실제 도메인 연결 상태는 Cloudflare 설정에 따라 달라집니다.

Cloudflare용 결과를 미리 확인하려면 다음 명령을 사용합니다.

```sh
npm run preview
```

### 배포 후 확인

- 홈과 주요 메뉴가 열리고 모바일 화면이 정상적으로 표시되는지 확인합니다.
- 오시는 길의 지도와 상담 접수원서 다운로드를 확인합니다.
- 담당자와 합의한 테스트 신청으로 실제 수신함까지 메일이 도착하는지 확인합니다.
- AI 안내 챗봇이 응답하는지 확인합니다.

## 6. 콘텐츠 수정 위치

화면의 주요 콘텐츠는 소스 파일에서 관리합니다. 수정 후에는 빌드·검사를 실행하고 배포해야 운영 사이트에 적용됩니다.

| 변경할 내용 | 파일 또는 폴더 |
| --- | --- |
| 홈 문구·수정 안내 팝업 | `approved-ui/pages/Home.tsx` |
| 센터 소개·조직도 | `approved-ui/pages/About.tsx`, `Organization.tsx` |
| 프로그램 안내 | `approved-ui/pages/programs/` |
| 공지·소식 | `approved-ui/pages/Notices.tsx` |
| 강사 매칭·진로 멘토링 | `approved-ui/pages/Instructors.tsx`, `Mentoring.tsx` |
| 상담신청 화면·동의 문구 | `approved-ui/pages/Apply.tsx` |
| 오시는 길·연락처 | `approved-ui/pages/Contact.tsx` |
| 상단 메뉴 | `approved-ui/components/Header.tsx` |
| 챗봇 화면 / 서버 안내 지침 | `approved-ui/components/ConsultationWidget.tsx` / `app/api/chat/route.ts` |
| 사이트 이름·도메인·기본 설명 | `site.config.ts`, `app/layout.tsx` |
| 페이지별 제목·검색용 사이트맵 | `app/[page]/page.tsx`, `app/programs/[slug]/page.tsx`, `app/sitemap.ts` |
| 이미지·영상·다운로드 자료 | `public/` |

`app/`은 Next.js 페이지 진입점과 서버 API를 담당하고, `approved-ui/`는 실제 사이트 화면을 구성합니다. `components/`는 두 구조를 연결하며, `lib/`는 외부 서비스 환경 설정을 처리합니다.

## 7. 자주 확인할 문제

| 증상 | 확인 사항 |
| --- | --- |
| `node` 또는 `npm` 명령을 찾지 못함 | Node.js 설치 후 터미널을 다시 열고 버전 확인 |
| `package.json`을 찾지 못함 | 압축 해제한 프로젝트 폴더에서 명령을 실행했는지 확인 |
| 패키지 설치 실패 | 인터넷 연결, 폴더 쓰기 권한, Node.js 버전 확인. 잠금 파일은 유지 |
| 생성된 타입 경로 오류 | `npm run build`를 먼저 실행한 뒤 `npm run typecheck` 재실행 |
| 카카오 지도가 표시되지 않음 | JavaScript 키, 이용 도메인 허용, 키 변경 후 재빌드 여부 확인 |
| “문의 접수 기능을 준비 중입니다.” 표시 | 운영 Worker의 `CONTACT_EMAIL` 바인딩과 메일 주소 설정 확인 |
| 챗봇 API 미설정 또는 응답 오류 | 운영 Secrets, 모델 접근 권한, Anthropic 계정 이용 상태 확인 |
| 로컬 수정이 운영 사이트에 보이지 않음 | 수정본을 다시 빌드·배포했는지, 올바른 Worker와 도메인인지 확인 |

문제를 전달할 때는 발생한 화면 주소, 수행한 동작, 발생 시각과 오류 메시지를 함께 기록하면 확인에 도움이 됩니다. API 키나 `.env` 내용은 오류 화면에 포함하지 않습니다.

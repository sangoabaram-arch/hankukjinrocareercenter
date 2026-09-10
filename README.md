# 한국진로커리어센터 웹사이트

Next.js 기반 사이트이며 Cloudflare Workers 배포 설정을 포함합니다.

## 설치 및 실행

검증 환경은 Node.js 24와 npm입니다. 프로젝트 폴더에서 실행합니다.

```sh
npm ci
npm run dev
```

로컬 주소는 `http://localhost:3000`입니다.

## 환경 설정

전달받은 `.env`를 프로젝트 최상위 폴더에 둡니다. `.env`가 없는 경우 `.env.example`을 복사하고 실제 서비스 설정을 입력합니다.

- `NEXT_PUBLIC_KAKAO_MAP_JS_KEY`: 카카오 지도 JavaScript 키
- `ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL`, `ANTHROPIC_WORKSPACE_ID`: 서버의 AI 상담 설정
- `CONTACT_EMAIL_TO`, `CONTACT_EMAIL_FROM`: 상담 메일 수신·발신 설정

`.env`는 비공개 설정 파일이며 Git 업로드 대상에서 제외되어 있습니다. Cloudflare 배포 시 서버 비밀값은 해당 Worker의 Secrets에 등록해야 합니다. 카카오 키는 사용 도메인의 허용 설정이 필요합니다.

## 검사 및 프로덕션 실행

```sh
npm run build
npm run lint
npm run typecheck
npm run start
```

빌드는 Next.js 타입 선언과 실행 산출물을 생성합니다.

## Cloudflare 배포

`wrangler.jsonc`의 Worker 이름, 메일 바인딩 및 서비스 설정을 대상 계정에 맞게 확인한 후 실행합니다.

```sh
npx wrangler login
npm run deploy
```

상담 메일 전송에는 Cloudflare의 `CONTACT_EMAIL` 바인딩과 허용된 발신·수신 주소 설정이 필요합니다. 로컬 Next.js 실행만으로 Cloudflare 메일 전송이 완성되지는 않습니다.

## 파일 구성

- `app/`: 페이지 진입점, 메타데이터 및 서버 API
- `approved-ui/`, `components/`: 사이트 화면과 라우팅 연결
- `content/`, `lib/`, `site.config.ts`: 콘텐츠, 서비스 연결 및 사이트 설정
- `public/`: 이미지·영상 및 상담 접수원서 다운로드 파일
- `package.json`, `package-lock.json` 및 루트 설정 파일: 설치·빌드·검사·배포 설정

의존성 폴더와 빌드 산출물은 설치·빌드 명령으로 생성합니다.

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  // 다른 환경 변수를 추가하려면 아래에 작성합니다.
  // readonly VITE_SOME_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

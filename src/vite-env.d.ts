/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
  readonly glob: (pattern: string) => Record<string, () => Promise<unknown>>
}

declare module "*.svg" {
  const content: string;
  export default content;
} 
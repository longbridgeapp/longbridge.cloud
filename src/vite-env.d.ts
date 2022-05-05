/// <reference types="vite/client" />


interface ImportMetaEnv {
  readonly VITE_LBProxy: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
    }
  }
}

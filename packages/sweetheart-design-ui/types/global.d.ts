declare module 'vue' {
  export interface GlobalComponents {
    SButton: typeof import('@sweetheart-design/ui')['_ButtonComponent']
  }
}

export {}

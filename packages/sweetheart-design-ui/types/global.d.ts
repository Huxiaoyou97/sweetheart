declare module 'vue' {
  export interface GlobalComponents {
    SAvatar: typeof import('@sweetheart-design/ui')['_AvatarComponent']
    SButton: typeof import('@sweetheart-design/ui')['_ButtonComponent']
    SDirective: typeof import('@sweetheart-design/ui')['_DirectiveComponent']
    SDivider: typeof import('@sweetheart-design/ui')['_DividerComponent']
    SIcon: typeof import('@sweetheart-design/ui')['_IconComponent']
    SLayout: typeof import('@sweetheart-design/ui')['_LayoutComponent']
    SRipple: typeof import('@sweetheart-design/ui')['_RippleComponent']
  }
}

export {}

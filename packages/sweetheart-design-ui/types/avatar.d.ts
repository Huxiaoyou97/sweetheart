import {SComponent} from './sComponent'

export interface AvatarProps {
    size?: number | 'small' | 'medium' | 'large'
    objectFit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down'
    src?: string
    color?: string
    circle?: boolean
    round?: boolean
    onError?: (e: Event) => void
}

export class Avatar extends SComponent {
    $props: AvatarProps
}

export class _AvatarComponent extends Avatar {
}

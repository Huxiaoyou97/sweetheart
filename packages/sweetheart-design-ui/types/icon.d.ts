import {SComponent} from './sComponent'

export interface IconProps {
    name?: string
    size?: string | number
    color?: string
    namespace?: string
    transition?: string | number
    onClick?: (e: Event) => void
}

export class Icon extends SComponent {
    $props: IconProps
}

export class _IconComponent extends Icon {}

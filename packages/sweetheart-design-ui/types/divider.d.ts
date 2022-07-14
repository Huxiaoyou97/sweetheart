import { SComponent } from './sComponent'

export interface DividerProps {
  inset?: boolean | number
  vertical?: boolean
  description?: string
  margin?: string
  dashed?: boolean
}

export class Divider extends SComponent {
  $props: DividerProps
}

export class _DividerComponent extends Divider {}

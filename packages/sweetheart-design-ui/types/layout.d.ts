import {SComponent} from "./sComponent";

export interface ContainerProps {
    direction?: string
}

export interface AsideProps {
    width?: string
}

export interface MainProps {
    width?: string
}

export interface HeaderProps {
    height?: string
}

export interface FooterProps {
    height?: string
}



export class Container extends SComponent {
    $props: ContainerProps
}

export class Aside extends SComponent {
    $props: AsideProps
}

export class Header extends SComponent {
    $props: HeaderProps
}

export class Main extends SComponent {
    $props: MainProps
}

export class Footer extends SComponent {
    $props: FooterProps
}

export class _ContainerComponent extends Container {}
export class _AsideComponent extends Aside {}
export class _HeaderComponent extends Header {}
export class _MainComponent extends Main {}
export class _FooterComponent extends Footer {}

declare module 'gsap-trial/SplitText' {
    export class SplitText {
        chars: HTMLElement[];
        words: HTMLElement[];
        lines: HTMLElement[];
        constructor(target: string | string[] | Element | Element[], vars?: Record<string, unknown>);
        revert(): void;
    }
}

declare module 'gsap-trial/ScrollSmoother' {
    import { Plugin } from 'gsap';
    export class ScrollSmoother extends Plugin {
        static create(vars: Record<string, unknown>): ScrollSmoother;
        static refresh(safe?: boolean): void;
        scrollTop(value?: number): number;
        scrollTo(target: string | Element | number | null, smooth?: boolean, position?: string): void;
        paused(value?: boolean): boolean;
    }
    export default ScrollSmoother;
}

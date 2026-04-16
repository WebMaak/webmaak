declare module "lenis" {
  export interface LenisOptions {
    wrapper?: HTMLElement;
    content?: HTMLElement;
    lerp?: number;
    duration?: number;
    smooth?: boolean;
    smoothTouch?: boolean;
    direction?: "vertical" | "horizontal";
    gestureDirection?: "vertical" | "horizontal";
    wheelMultiplier?: number;
    touchMultiplier?: number;
    normalizeWheel?: boolean;
  }

  export default class Lenis {
    constructor(options?: LenisOptions);
    raf(time: number): void;
    scrollTo(target: HTMLElement | number | string, options?: any): void;
    on(event: string, callback: (...args: any[]) => void): void;
    destroy(): void;
  }
}

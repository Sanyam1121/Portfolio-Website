declare module "gsap-trial/ScrollSmoother" {
  interface ScrollSmoother {
    scrollTop(value: number): void;
    paused(value: boolean): void;
    scrollTo(target: any, smooth: boolean, position: string): void;
  }

  interface ScrollSmootherStatic {
    create(options: any): ScrollSmoother;
    refresh(isForced?: boolean): void;
  }

  const ScrollSmoother: ScrollSmootherStatic;
  export { ScrollSmoother };
  export default ScrollSmoother;
}

declare module "gsap-trial/SplitText" {
  interface SplitText {
    chars: any[];
    words: any[];
    lines: any[];
    revert(): void;
  }

  interface SplitTextStatic {
    new (target: any, vars?: any): SplitText;
  }

  const SplitText: SplitTextStatic;
  export { SplitText };
  export default SplitText;
}

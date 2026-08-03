import "@testing-library/jest-dom/vitest";

// jsdom doesn't implement matchMedia; next-themes uses it to detect the
// system color-scheme preference, so tests would otherwise throw.
if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// jsdom's requestAnimationFrame doesn't drive React state updates the way a
// real browser paint loop does, so time-based animations (e.g. the stat
// counters in AnimatedStatValue) would never reach their final frame during
// a synchronous test. Resolving on the next tick lets rAF-driven effects
// settle without needing every test to manually flush timers.
if (typeof window !== "undefined") {
  window.requestAnimationFrame = ((callback: FrameRequestCallback) => {
    return setTimeout(() => callback(performance.now() + 1000), 0) as unknown as number;
  }) as typeof window.requestAnimationFrame;
  window.cancelAnimationFrame = ((handle: number) => {
    clearTimeout(handle);
  }) as typeof window.cancelAnimationFrame;
}
// `whileInView`/`useInView` (used by Reveal & AnimatedStatValue) rely on it.
// The mock immediately reports every observed element as intersecting so
// scroll-reveal content and counters render their final state in tests.
if (typeof window !== "undefined" && !window.IntersectionObserver) {
  class MockIntersectionObserver implements IntersectionObserver {
    readonly root: Element | Document | null = null;
    readonly rootMargin: string = "";
    readonly thresholds: ReadonlyArray<number> = [];
    constructor(private callback: IntersectionObserverCallback) {}
    observe(target: Element) {
      this.callback(
        [
          {
            isIntersecting: true,
            target,
            intersectionRatio: 1,
            boundingClientRect: target.getBoundingClientRect(),
            intersectionRect: target.getBoundingClientRect(),
            rootBounds: null,
            time: Date.now(),
          } as IntersectionObserverEntry,
        ],
        this,
      );
    }
    unobserve() {}
    disconnect() {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  }
  window.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
  global.IntersectionObserver =
    MockIntersectionObserver as unknown as typeof IntersectionObserver;
}

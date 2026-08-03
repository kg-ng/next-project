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

import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        pixel: ["var(--font-pixel)"],
        "mono-pixel": ["var(--font-mono-pixel)"],
        body: ["var(--font-body)"],
      },
      colors: {
        // Cozy retro palette — theme-aware via CSS variables (see globals.css :root/.dark).
        // Prefer these `pixel-*` tokens in new components; they auto-switch with light/dark mode.
        "pixel-bg": "hsl(var(--pixel-bg))",
        "pixel-panel": "hsl(var(--pixel-panel))",
        "pixel-panel-2": "hsl(var(--pixel-panel-2))",
        "pixel-border": "hsl(var(--pixel-border))",
        "pixel-text": "hsl(var(--pixel-text))",
        "pixel-text-soft": "hsl(var(--pixel-text-soft))",
        "pixel-accent": "hsl(var(--pixel-accent))",
        "pixel-accent-2": "hsl(var(--pixel-accent-2))",
        // Legacy static tokens — kept for anything not yet migrated to pixel-* tokens.
        black: {
          DEFAULT: "#120b07",
          100: "#1a1410",
          200: "#261c14",
          300: "rgba(255, 244, 230, 0.125)",
        },
        white: {
          DEFAULT: "#FFF4E6",
          100: "#E8DFD3",
          200: "#D8CFC0",
        },
        cream: "#F3E5D8",
        amber: {
          soft: "#F5C99B",
          DEFAULT: "#E8A659",
        },
        terracotta: "#D97B4F",
        espresso: "#1a0f08",
        purple: "#D97B4F",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        "pixel-float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-6px)" },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        blink: "blink 1s steps(1) infinite",
        "pixel-float": "pixel-float 3s ease-in-out infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), addVariablesForColors],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  const flattenColorPalette =
    require("tailwindcss/lib/util/flattenColorPalette").default;
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;

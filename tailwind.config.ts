import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
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
        sans: ['"Hanken Grotesk Variable"', '"Hanken Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
        // "font-inter" is used in App.tsx; it now maps to the site font
        inter: ['"Hanken Grotesk Variable"', '"Hanken Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        /* Eden palette */
        paper: "hsl(var(--paper))",
        surface: "hsl(var(--surface))",
        tint: "hsl(var(--tint))",
        ink: {
          DEFAULT: "hsl(var(--ink))",
          raised: "hsl(var(--ink-raised))",
        },
        graphite: "hsl(var(--graphite))",
        line: "hsl(var(--line))",
        sage: {
          DEFAULT: "hsl(var(--sage))",
          light: "hsl(var(--sage-light))",
        },

        /* Core System */
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          tertiary: "hsl(var(--background-tertiary))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          muted: "hsl(var(--foreground-muted))",
        },

        /* Glass Morphism */
        glass: {
          DEFAULT: "hsl(var(--glass))",
          border: "hsl(var(--glass-border))",
          foreground: "hsl(var(--glass-foreground))",
        },

        /* Brand Colors */
        primary: {
          DEFAULT: "hsl(var(--primary))",
          glow: "hsl(var(--primary-glow))",
          soft: "hsl(var(--primary-soft))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          glow: "hsl(var(--secondary-glow))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          glow: "hsl(var(--accent-glow))",
          foreground: "hsl(var(--accent-foreground))",
        },

        /* Interactive States */
        hover: "hsl(var(--hover))",
        active: "hsl(var(--active))",

        /* Semantic Colors */
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
        info: "hsl(var(--info))",

        /* Legacy Support */
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        DEFAULT: "var(--radius)",
        md: "var(--radius)",
        sm: "var(--radius-sm)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

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
        inter: ["Inter", "sans-serif"],
      },
      colors: {
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
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)", 
        "gradient-glass": "var(--gradient-glass)",
        "gradient-glow": "var(--gradient-glow)",
        "gradient-mesh": "var(--gradient-mesh)",
      },
      boxShadow: {
        glow: "var(--shadow-glow)",
        glass: "var(--shadow-glass)",
        card: "var(--shadow-card)",
        hover: "var(--shadow-hover)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out infinite 2s",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "gradient": "gradient-shift 8s ease infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "scale-in": "scale-in 0.6s ease-out forwards",
      },
      transitionTimingFunction: {
        "smooth": "var(--ease-smooth)",
        "bounce": "var(--ease-bounce)",
      },
      transitionDuration: {
        "fast": "var(--duration-fast)",
        "normal": "var(--duration-normal)", 
        "slow": "var(--duration-slow)",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

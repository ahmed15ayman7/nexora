import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: "var(--destructive)",
        chart: {
          1: "var(--chart-1)",
          2: "var(--chart-2)",
          3: "var(--chart-3)",
          4: "var(--chart-4)",
          5: "var(--chart-5)",
        },
        gold: {
          50: "#faf6eb",
          100: "#f3ead1",
          200: "#e6d49e",
          300: "#d4bf6e",
          400: "#c5a059",
          500: "#b89442",
          600: "#9a7430",
          700: "#7d5f2a",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans-alt)", "system-ui", "sans-serif"],
      },
      keyframes: {
        "nexora-scan": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        "nexora-dash": {
          "0%": { transform: "translateX(-8px)", opacity: "0.3" },
          "50%": { opacity: "0.95" },
          "100%": { transform: "translateX(8px)", opacity: "0.3" },
        },
      },
      animation: {
        "nexora-scan": "nexora-scan 2.8s ease-in-out infinite",
        "nexora-dash": "nexora-dash 2s ease-in-out infinite",
      },
      backgroundImage: {
        noise:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
} satisfies Config;

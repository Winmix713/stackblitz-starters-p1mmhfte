/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
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
      // 8px Grid System
      spacing: {
        "2": "0.125rem", // 2px
        "4": "0.25rem", // 4px
        "8": "0.5rem", // 8px
        "12": "0.75rem", // 12px
        "16": "1rem", // 16px
        "20": "1.25rem", // 20px
        "24": "1.5rem", // 24px
        "32": "2rem", // 32px
        "40": "2.5rem", // 40px
        "48": "3rem", // 48px
        "56": "3.5rem", // 56px
        "64": "4rem", // 64px
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          "50": "hsl(var(--primary-50))",
          "100": "hsl(var(--primary-100))",
          "200": "hsl(var(--primary-200))",
          "300": "hsl(var(--primary-300))",
          "400": "hsl(var(--primary-400))",
          "500": "hsl(var(--primary-500))",
          "600": "hsl(var(--primary-600))",
          "700": "hsl(var(--primary-700))",
          "800": "hsl(var(--primary-800))",
          "900": "hsl(var(--primary-900))",
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
        xs: "var(--radius-xs)",
        s: "var(--radius-s)",
        m: "var(--radius-m)",
        l: "var(--radius-l)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 0.125rem)",
        sm: "calc(var(--radius) - 0.25rem)",
      },
      boxShadow: {
        xs: "var(--shadow-xs)",
        s: "var(--shadow-s)",
        m: "var(--shadow-m)",
        l: "var(--shadow-l)",
        xl: "var(--shadow-xl)",
      },
      fontSize: {
        // Display Types
        "display-xl": ["4rem", { lineHeight: "4.5rem", fontWeight: "700" }],
        "display-l": ["3rem", { lineHeight: "3.5rem", fontWeight: "700" }],
        "display-m": ["2.5rem", { lineHeight: "3rem", fontWeight: "700" }],
        "display-s": ["2rem", { lineHeight: "2.5rem", fontWeight: "700" }],

        // Heading Types
        "heading-xl": ["1.5rem", { lineHeight: "2rem", fontWeight: "600" }],
        "heading-l": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "600" }],
        "heading-m": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "600" }],
        "heading-s": ["1rem", { lineHeight: "1.5rem", fontWeight: "600" }],
        "heading-xs": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "600" }],

        // Body Types
        "body-xl": ["1.25rem", { lineHeight: "1.75rem", fontWeight: "400" }],
        "body-l": ["1.125rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "body-m": ["1rem", { lineHeight: "1.5rem", fontWeight: "400" }],
        "body-s": ["0.875rem", { lineHeight: "1.25rem", fontWeight: "400" }],
        "body-xs": ["0.75rem", { lineHeight: "1rem", fontWeight: "400" }],
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backdropBlur: {
        xs: "var(--blur-xs)",
        s: "var(--blur-s)",
        m: "var(--blur-m)",
        l: "var(--blur-l)",
        xl: "var(--blur-xl)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
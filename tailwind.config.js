const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  safelist: [
    "dark-purple",
    "dark-blue",
    "dark-green",
    "dark-red",
    "dark-coral"
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        mobile: {
          raw: "not all and (orientation: landscape) and (min-width: 768px)",
        },
      },
      colors: {
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
        },
      },
      dropShadow: {
        glow: [
          "0 0px 8px rgba(255,255, 255, 0.3)",
          "0 0px 8px rgba(255, 255,255, 0.3)",
        ],
        glowLight: [
          "0 0px 8px rgba(255,255, 255, 0.3)",
        ]
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        poppins: ["Poppins", "serif"],
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        },
        wiggle: {
          '25%, 75%': { transform: 'rotate(-15deg)' },
          '50%': { transform: 'rotate(15deg)' },
        },
      }),
      animation: {
        "fade-in": "fadeIn 0.15s ease-in-out",
        "wiggle": 'wiggle 0.8s ease-in-out',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

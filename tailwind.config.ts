import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#021842", // Base color for primary
          light: "#04327A", // Lighter shade of primary
          dark: "#010F2E", // Darker shade of primary
        },
        secondary: {
          DEFAULT: "#FF6500", // Base color for secondary
          light: "#FF8540", // Lighter shade of secondary
          dark: "#CC5200", // Darker shade of secondary
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/wallerpaper.jpeg')",
      },
    },
  },
  plugins: [],
} satisfies Config;

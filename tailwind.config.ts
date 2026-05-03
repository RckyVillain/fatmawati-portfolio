import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#050505',
          card: '#0a0e14',
          elevated: '#111820',
        },
        gold: {
          DEFAULT: '#C9A84C',
          light: '#E0C87A',
          dark: '#A88A35',
        },
        emerald: {
          DEFAULT: '#2ECC71',
          light: '#5DEDA0',
          dark: '#1FA855',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'pulse-gold': 'pulse-gold 2s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'scroll-hint': 'scroll-hint 2s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
        'slide-in-left': 'slide-in-left 0.6s ease-out forwards',
        'slide-in-right': 'slide-in-right 0.6s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 168, 76, 0.4)' },
          '50%': { boxShadow: '0 0 30px 10px rgba(201, 168, 76, 0.1)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'scroll-hint': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '50%': { transform: 'translateY(12px)', opacity: '0.4' },
        },
        'fade-in-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(60px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A84C 0%, #E0C87A 50%, #C9A84C 100%)',
        'gold-gradient-h': 'linear-gradient(90deg, #C9A84C 0%, #E0C87A 100%)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #0a0e14 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(10,14,20,0.8) 0%, rgba(17,24,32,0.6) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

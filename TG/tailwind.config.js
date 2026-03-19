/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
          glow: 'rgba(245, 158, 11, 0.3)',
        },
        cyan: {
          accent: '#22D3EE',
        },
        glass: {
          DEFAULT: 'rgba(255, 255, 255, 0.05)',
          border: 'rgba(255, 255, 255, 0.1)',
          card: 'rgba(255, 255, 255, 0.03)',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'radial-gold': 'radial-gradient(ellipse at center, rgba(245, 158, 11, 0.2) 0%, transparent 70%)',
        'radial-cyan': 'radial-gradient(ellipse at center, rgba(34, 211, 238, 0.15) 0%, transparent 70%)',
        'gradient-gold': 'linear-gradient(135deg, #F59E0B, #D97706)',
        'gradient-dark': 'linear-gradient(180deg, #0a0a0a 0%, #000000 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.07), rgba(255,255,255,0.02))',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(245, 158, 11, 0.3)',
        'gold-md': '0 0 30px rgba(245, 158, 11, 0.4)',
        'gold-lg': '0 0 60px rgba(245, 158, 11, 0.3)',
        'card': '0 8px 32px rgba(0, 0, 0, 0.4)',
        'glass': 'inset 0 1px 0 rgba(255,255,255,0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulse-gold 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-gold': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245, 158, 11, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(245, 158, 11, 0.6)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

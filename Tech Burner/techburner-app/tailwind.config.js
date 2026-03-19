export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary palette (neon green)
        primary: '#9cff92',
        'primary-container': '#00fc3f',
        'primary-fixed': '#00fc3f',
        'primary-dim': '#00ec3a',
        'on-primary': '#006412',
        'on-primary-container': '#005a10',
        'on-primary-fixed': '#004409',
        // Secondary (purple)
        secondary: '#b984ff',
        'secondary-container': '#620bb7',
        'secondary-dim': '#b984ff',
        'on-secondary': '#2f0060',
        'on-secondary-container': '#e0c6ff',
        // Tertiary (cyan)
        tertiary: '#8af2ff',
        'tertiary-dim': '#00dbec',
        'tertiary-container': '#0eeafd',
        'on-tertiary': '#005b63',
        // Surfaces
        background: '#0e0e0e',
        surface: '#0e0e0e',
        'surface-dim': '#0e0e0e',
        'surface-bright': '#2c2c2c',
        'surface-variant': '#262626',
        'surface-container': '#1a1919',
        'surface-container-low': '#131313',
        'surface-container-high': '#201f1f',
        'surface-container-highest': '#262626',
        'surface-container-lowest': '#000000',
        // Text
        'on-surface': '#ffffff',
        'on-surface-variant': '#adaaaa',
        'on-background': '#ffffff',
        // Misc
        outline: '#767575',
        'outline-variant': '#484847',
        'surface-tint': '#9cff92',
        error: '#ff7351',
        'error-container': '#b92902',
        'on-error': '#450900',
        'on-error-container': '#ffd2c8',
      },
      fontFamily: {
        headline: ['Space Grotesk', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'sans-serif'],
        label: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        full: '9999px',
      },
      boxShadow: {
        'neon-sm': '0 0 15px rgba(156, 255, 146, 0.15)',
        'neon-md': '0 0 25px rgba(156, 255, 146, 0.25)',
        'neon-lg': '0 0 40px rgba(156, 255, 146, 0.3)',
        'floating': '0 20px 40px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
}

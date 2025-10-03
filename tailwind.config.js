/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#2F0B49',
          100: '#2F0B49',
          200: '#5A0F98',
          300: '#5A0F98',
          400: '#8424B3',
          500: '#8424B3',
          600: '#8728C3',
          700: '#8728C3',
          800: '#8728C3',
          900: '#8728C3',
        },
        royal: {
          50: '#2F0B49',
          100: '#2F0B49',
          200: '#5A0F98',
          300: '#5A0F98',
          400: '#8424B3',
          500: '#8424B3',
          600: '#8728C3',
          700: '#8728C3',
          800: '#8728C3',
          900: '#8728C3',
        },
        dark: {
          50: '#000000',
          100: '#000000',
          200: '#000000',
          300: '#000000',
          400: '#000000',
          500: '#000000',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000',
          950: '#000000',
        },
        accent: {
          50: '#2F0B49',
          100: '#2F0B49',
          200: '#5A0F98',
          300: '#5A0F98',
          400: '#8424B3',
          500: '#8424B3',
          600: '#8728C3',
          700: '#8728C3',
          800: '#8728C3',
          900: '#8728C3',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(132, 36, 179, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(135, 40, 195, 0.8)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)',
        'gradient-royal': 'linear-gradient(135deg, #2F0B49 0%, #5A0F98 50%, #8424B3 100%)',
        'gradient-blue': 'linear-gradient(135deg, #8424B3 0%, #8728C3 50%, #8728C3 100%)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

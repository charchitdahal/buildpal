/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          900: '#111827',
          600: '#6b7280',
          400: '#9ca3af',
        },
        indigo: {
          500: '#6366f1',
        },
        pink: {
          500: '#ec4899',
        },
        orange: {
          400: '#fb923c',
          500: '#f97316',
        },
        green: {
          400: '#4ade80',
          500: '#22c55e',
        }
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(to right, #6366f1, #ec4899)',
        'gradient-base44': 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        'gradient-hero': 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      }
    },
  },
  plugins: [],
}

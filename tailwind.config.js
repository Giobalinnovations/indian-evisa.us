/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7c3aed',
        secondary: '#1e293b',
        accent: '#f43f5e',
        tertiary: '#8b5cf6',
        success: '#10b981',
        warning: '#f59e0b',
      },
      backgroundImage: {
        'hex-pattern': "url('/assets/images/hex-pattern.svg')",
        'mesh-gradient': 'linear-gradient(45deg, #7c3aed 0%, #f43f5e 100%)',
      },
    },
  },
  plugins: [],
};

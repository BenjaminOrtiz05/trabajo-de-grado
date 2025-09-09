import type { Config } from 'tailwindcss';
import { fontFamily } from 'tailwindcss/defaultTheme';
import animatePlugin from 'tailwindcss-animate';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(144, 19%, 96%)',
        foreground: 'hsl(144, 5%, 10%)',
        card: 'hsl(144, 19%, 96%)',
        'card-foreground': 'hsl(144, 5%, 15%)',
        popover: 'hsl(144, 19%, 96%)',
        'popover-foreground': 'hsl(144, 95%, 10%)',
        primary: 'hsl(144, 100%, 22.2%)',
        'primary-foreground': 'hsl(0, 0%, 100%)',
        secondary: 'hsl(144, 19%, 90%)',
        'secondary-foreground': 'hsl(0, 0%, 0%)',
        muted: 'hsl(106, 19%, 95%)',
        'muted-foreground': 'hsl(144, 5%, 40%)',
        accent: 'hsl(106, 19%, 90%)',
        'accent-foreground': 'hsl(144, 5%, 15%)',
        destructive: 'hsl(0, 50%, 50%)',
        'destructive-foreground': 'hsl(144, 5%, 96%)',
        border: 'hsl(144, 20%, 82%)',
        input: 'hsl(144, 20%, 50%)',
        ring: 'hsl(144, 100%, 22.2%)',
      },
      borderRadius: {
        lg: '0.5rem',
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out forwards',
        fadeOut: 'fadeOut 0.3s ease-out forwards',
      },
    },
  },
  plugins: [animatePlugin],
};

export default config;

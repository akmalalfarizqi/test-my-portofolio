module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: "#000000", // black - Foundation authority, professional dark theme base
        secondary: "#FFFFFF", // white - Clean contrast, light theme foundation
        accent: "#00FF41", // matrix green - Matrix-inspired focus, cybersecurity energy
        
        // Background Colors
        background: "#0A0A0A", // near-black - Subtle depth, reduces pure black harshness
        surface: "#1A1A1A", // dark-gray - Card elevation, interactive element backgrounds
        
        // Text Colors
        'text-primary': "#FFFFFF", // white - High contrast reading, accessibility first
        'text-secondary': "#B3B3B3", // gray-400 - Clear hierarchy, secondary information clarity
        
        // Status Colors
        success: "#00CC33", // green-600 - Positive reinforcement, security status indicators
        warning: "#FF9500", // orange-500 - Attention without alarm, educational cautions
        error: "#FF3333", // red-500 - Clear problems, helpful error states
        
        // Light Theme Colors
        'light-background': "#FFFFFF", // white - Light theme foundation
        'light-surface': "#F5F5F5", // gray-100 - Light theme card backgrounds
        'light-text-primary': "#000000", // black - Light theme primary text
        'light-text-secondary': "#666666", // gray-600 - Light theme secondary text
        
        // Additional Cyber Theme Colors
        'cyber-green': {
          50: "#E8FFE8", // very light green
          100: "#B3FFB3", // light green
          200: "#80FF80", // medium light green
          300: "#4DFF4D", // medium green
          400: "#1AFF1A", // bright green
          500: "#00FF41", // matrix green - primary accent
          600: "#00E63A", // darker matrix green
          700: "#00CC33", // success green
          800: "#00B32D", // dark green
          900: "#009926", // very dark green
        },
        
        // Gray Scale for Dark Theme
        'cyber-gray': {
          50: "#F9F9F9", // very light gray
          100: "#F5F5F5", // light surface
          200: "#E5E5E5", // light gray
          300: "#D4D4D4", // medium light gray
          400: "#B3B3B3", // secondary text
          500: "#999999", // medium gray
          600: "#666666", // light theme secondary text
          700: "#4D4D4D", // dark gray
          800: "#1A1A1A", // surface
          900: "#0A0A0A", // background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        code: ['Fira Code', 'monospace'],
        'fira-code': ['Fira Code', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      fontWeight: {
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },
      boxShadow: {
        'cyber': '0 4px 12px rgba(0, 0, 0, 0.15)',
        'cyber-lg': '0 8px 24px rgba(0, 0, 0, 0.25)',
        'cyber-accent': '0 4px 12px rgba(0, 255, 65, 0.2)',
        'cyber-accent-lg': '0 8px 24px rgba(0, 255, 65, 0.3)',
        'cyber-light': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'cyber-light-lg': '0 8px 24px rgba(0, 0, 0, 0.12)',
      },
      animation: {
        'typing': 'typing 2s steps(40, end), blink-caret 0.75s step-end infinite',
        'blink': 'blink-caret 0.75s step-end infinite',
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
      },
      keyframes: {
        typing: {
          'from': { width: '0' },
          'to': { width: '100%' }
        },
        'blink-caret': {
          'from, to': { 'border-color': 'transparent' },
          '50%': { 'border-color': '#00FF41' }
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        slideUp: {
          'from': { transform: 'translateY(10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          'from': { transform: 'translateY(-10px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' }
        }
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'cyber': '0.5rem',
      },
      backdropBlur: {
        'cyber': '12px',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
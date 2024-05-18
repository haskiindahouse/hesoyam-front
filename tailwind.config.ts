import type { Config } from 'tailwindcss'

const config: Config = {
  /* TODO: Add following precedence (lower number - lower priority)
   * 1. prefers-color-scheme
   * 2. current theme in localStorage
   */
  // darkMode: [
  //   'variant',
  //   ['@media (prefers-color-scheme: dark) { &:not(.light *) }', '&:is(.dark *)']
  // ],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter']
      },
      // setting `DEFAULT` key is not the same as applying a value through tailwind/plugin or @layer
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      },
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)'
      }
    }
  },
  plugins: []
}
export default config

// 3. Define your fonts
const fonts = {
  heading: `'Lora', serif`,
  body: `'Inter', sans-serif`,
}

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    tokens: {
      colors: {
        brand: {
          primary: { value: 'tomato' },
          secondary: { value: 'orange' },
          red: { value: '#EE0F0F' },
          green: { value: '#0FEE0F' },
        },
      },
    },
    semanticTokens: {
      colors: {
        danger: { value: '{colors.brand.red}' },
      },
    },
    keyframes: {
      spin: {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
    },
  },
})

export default createSystem(defaultConfig, config)

export const system = createSystem(defaultConfig, config)

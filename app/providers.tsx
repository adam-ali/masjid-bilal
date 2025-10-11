// app/providers.tsx
'use client'

import { ThemeProvider } from '@mui/material'
import { theme } from '../theme/theme' // Make sure this path is correct

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

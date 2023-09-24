'use client'

import { GlobalStyles } from '@/styles/globalStyles'
import { themes } from '@/styles/themes'
import { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

export function Providers({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

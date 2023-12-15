import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/global-styles'
import { themes } from '../src/styles/themes'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  layout: 'fullscreen'
}

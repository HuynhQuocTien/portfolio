import { render, screen } from '@testing-library/react'
import App from './App'
import { ThemeProvider } from './contexts/theme'

test('renders portfolio with author name', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
  const nameElements = screen.getAllByText(/Huynh Quoc Tien/i)
  expect(nameElements.length).toBeGreaterThan(0)
})

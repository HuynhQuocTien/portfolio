import { render, screen } from '@testing-library/react'
import App from './App'
import { ThemeProvider } from './contexts/theme'

test('renders portfolio with author name, projects, and skills', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  )
  const nameElements = screen.getAllByText(/Huynh Quoc Tien/i)
  expect(nameElements.length).toBeGreaterThan(0)

  // Verify new featured project
  expect(
    screen.getByText(/Ecommerce Affiliate & Cashback System/i)
  ).toBeInTheDocument()

  // Verify experience
  expect(
    screen.getByText(/Chip-equipped Driving Test Booking System/i)
  ).toBeInTheDocument()

  // Verify skills heading
  expect(screen.getByText(/Technical Skills/i)).toBeInTheDocument()
})

import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer'
import { BrowserRouter } from 'react-router-dom'

describe("<Footer />", () => {
  it("has a copyright", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    screen.logTestingPlaygroundURL()

    const footer = screen.getByText(/© 2023 learn cat\-tastic production \| elyse & charlean \|/i)
    expect(footer).toBeInTheDocument()
  })
})
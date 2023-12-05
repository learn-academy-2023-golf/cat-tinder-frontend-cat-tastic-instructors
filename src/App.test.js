import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom'

describe("<App />", () => {
  it("renders a greeting", () => {
    // Arrange: setup the environment
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )
    // screen.debug()
    // screen.logTestingPlaygroundURL()

    // Act
    const greeting = screen.getByText("Get ready to embark on a whisker-filled adventure!")
    // Assert
    expect(greeting).toBeInTheDocument()
  })

  it("has a heading", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    )

    const heading = screen.getByRole('heading', {
      name: /Get ready to embark on a whisker-filled adventure!/i
    })
    expect(heading).toBeInTheDocument()
  })
})
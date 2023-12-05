import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom'
import catLogo from "../assets/cat-logo.png"

describe("<Header />", () => {
  it("has an image", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )



    const image = screen.getByRole("img")
    expect(image).toHaveAttribute("src", catLogo)
  })
})
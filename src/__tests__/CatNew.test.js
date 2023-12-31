import { render, screen } from '@testing-library/react';
import CatNew from '../pages/CatNew';
import { BrowserRouter } from 'react-router-dom'

describe("<CatNew />", () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <CatNew />
      </BrowserRouter>
    )
  })
  it("renders the CatNew page for the user", () => {
    const element = screen.getByText(/Add a new cat/i)
    expect(element).toBeInTheDocument()
    expect(element).toHaveTextContent("Add a new cat!")
  })

  it("has a form with entries for name, age, enjoys, and image", () => {
    screen.debug()
    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("for")).toEqual("name")

    const formAge = screen.getByText("Age")
    expect(formAge.getAttribute("for")).toEqual("age")

    const formEnjoys = screen.getByText("Enjoys")
    expect(formEnjoys.getAttribute("for")).toEqual("enjoys")

    const formImage = screen.getByText("Image")
    expect(formImage.getAttribute("for")).toEqual("image")
  })
})


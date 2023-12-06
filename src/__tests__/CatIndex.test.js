import { render, screen } from '@testing-library/react';
import CatIndex from '../pages/CatIndex';
import { BrowserRouter } from 'react-router-dom'
import mockCats from '../mockCats'


describe("<CatIndex />", () => {
  it("renders cat cards", () => {
    render(
      <BrowserRouter>
        <CatIndex cats={mockCats} />
      </BrowserRouter>
    )
    mockCats.forEach(catObject => {
      const catName = screen.getByText(catObject.name)
      expect(catName).toBeInTheDocument()
    })
  })
})
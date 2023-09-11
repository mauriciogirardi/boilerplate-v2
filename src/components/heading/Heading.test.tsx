import { render, screen } from '@testing-library/react'
import Heading from './Heading'

describe('<Heading/>', () => {
  it('should render the heading', () => {
    render(<Heading />)

    expect(
      screen.getByRole('heading', { name: /boilerplate v2/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })
})

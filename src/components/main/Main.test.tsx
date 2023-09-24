import { screen } from '@testing-library/react'
import { Main } from './Main'
import { renderWithTheme } from '@/utils/tests/helper'

describe('<Main />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Main />)

    expect(
      screen.getByRole('heading', { name: /boilerplate v2/i })
    ).toBeInTheDocument()

    // expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the colors correctly', () => {
    const { container } = renderWithTheme(<Main />)
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})

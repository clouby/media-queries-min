import { render, screen } from '@testing-library/react'
import { breakpointCases } from '../helpers'
import UseMediaQuery from '../UseMediaQuery'

describe('Behavior about `useMediaQuery`', () => {
  beforeEach(() => {
    window.matchMedia.mockClear()
  })

  test('should render `UserMediaQuery` properly', () => {
    render(<UseMediaQuery />)
    expect(screen.getByTitle(/container/i)).toBeInTheDocument()
  })

  breakpointCases('Breakpoints Cases', UseMediaQuery, [
    {
      brk: 'xs',
      expected: '(max-width: 576px)',
      maxCalled: 1
    },
    {
      brk: 'sm',
      expected: '(min-width: 576px)',
      maxCalled: 1
    },
    {
      brk: 'md',
      expected: '(min-width: 768px)',
      maxCalled: 1
    },
    {
      brk: 'lg',
      expected: '(min-width: 992px)',
      maxCalled: 1
    },
    {
      brk: 'xl',
      expected: '(min-width: 1200px)',
      maxCalled: 1
    }
  ])
})

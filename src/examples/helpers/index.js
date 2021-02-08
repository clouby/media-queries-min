import { render } from '@testing-library/react'

function breakpointCases(description = '', Component, cases) {
  describe(`${description}`, () => {
    for (const { brk, expected, maxCalled } of cases) {
      test(`should display query when the size breakpoint is '${brk}'`, () => {
        render(<Component size={brk} />)
        const mediaMatch = window.matchMedia
        expect(mediaMatch).toHaveBeenCalledTimes(maxCalled)
        expect(mediaMatch).toHaveBeenCalledWith(expected)
      })
    }
  })
}

export { breakpointCases }

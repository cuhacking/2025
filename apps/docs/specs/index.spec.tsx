import React from 'react'
import { render } from '@testing-library/react'

import Page from '../src/app/page'

describe('page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />)
    expect(baseElement).toBeTruthy()
  })
})

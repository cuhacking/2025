import { render } from '@testing-library/react'
import React from 'react'

import Page from '../src/app/page'

describe('page', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Page />)
    expect(baseElement).toBeTruthy()
  })
})

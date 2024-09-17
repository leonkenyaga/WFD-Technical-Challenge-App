import React from 'react'
import Footer from '../../footer/index'
import { render } from '@testing-library/react'

describe('Footer', () => {
   test('Should render without crash', async () => {
      render(<Footer />)
   })
})
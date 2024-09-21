import React from 'react'
import Interests from '../../../main/interests'
import { render } from '@testing-library/react'

describe('Interests', () => {
   test('Should render without crash', async () => {
      render(<Interests />)
   })
})
import React from 'react'
import Ideas from '../../../main/ideas'
import { render } from '@testing-library/react'

describe('Ideas', () => {
   test('Should render without crash', async () => {
      render(<Ideas />)
   })
})

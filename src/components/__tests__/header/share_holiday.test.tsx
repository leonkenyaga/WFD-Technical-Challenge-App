import React from 'react'
import ShareHoliday from '../../header/share_holiday'
import { render } from '@testing-library/react'

describe('Header', () => {
   test('Should render without crash', async () => {
      render(<ShareHoliday />)
   })
})
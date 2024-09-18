import React from 'react'
import Dreamshare_login_signup from '../../header/dreamshare_login_signup'
import { render } from '@testing-library/react'

describe('Header', () => {
   test('Should render without crash', async () => {
      render(<Dreamshare_login_signup />)
   })
})
import React from 'react'
import MostPopularMovies from '../../../main/most_popular_movies'
import { render } from '@testing-library/react'

describe('MostPopularMovies', () => {
   test('Should render without crash', async () => {
      render(<MostPopularMovies />)
   })
})
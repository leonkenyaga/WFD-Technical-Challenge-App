import React from 'react'
import MostPopularMovies from '../../../main/most_popular_movies'
import { render } from '@testing-library/react'
import renderer from "react-test-renderer"

describe('MostPopularMovies', () => {
   test('Should render without crash', async () => {
      render(<MostPopularMovies />)
   })
})

describe("MostPopularMovies", () => {
    it("Queries and renders correctly", () => {
      const tree = renderer
        .create(<MostPopularMovies />)
        .toJSON()
  
        expect(tree).toMatchSnapshot()
    })
  })
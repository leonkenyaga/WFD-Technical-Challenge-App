import React from 'react'
import MostPopularCelebs from '../../../main/most_popular_celebs'
import { render } from '@testing-library/react'
import renderer from "react-test-renderer"

describe('MostPopularCelebs', () => {
   test('Should render without crash', async () => {
      render(<MostPopularCelebs />)
   })
})

describe("MostPopularMovies", () => {
    it("Queries and renders correctly", () => {
      const tree = renderer
        .create(<MostPopularCelebs />)
        .toJSON()
  
        expect(tree).toMatchSnapshot()
    })
  })
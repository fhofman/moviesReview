import { Movie } from './../entity/Movie';
import { MovieController } from './MovieController';
import axios from 'axios';
const movieController = new MovieController()

jest.mock('axios');


describe('Movie Controller', () => {
  test('Gel all movies', () => {

    const expected =
    const result = movieController.all
    expect(result).toStrictEqual(expected)
  })
})
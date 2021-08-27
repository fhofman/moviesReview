/*import { Movie } from './../entity/Movie';
import { MovieController } from './MovieController';
import axios from 'axios';
import { describe , it } from 'jest';
const movieController = new MovieController()

jest.mock('axios');


describe('Movie Controller', () => {
  it('Get all movies', async () => {
    axios.get.mockResolvedValue({
      data: [
        {
          id: 1,
          title: 'movie 1',
          plot: 'plot 1'
        },
        {
          id: 2,
          title: 'movie 2',
          plot: 'plot 2'
        }
      ]
    }
    axios.get.mockImplementationOnce(() => Promise.resolve(data));

    await expect(movieController.all()).resolves.toEqual(data);
  });

)};
*/
import { Request, Response } from 'express';
import { MovieController } from './MovieController';
const movieController = new MovieController()

describe('Movie Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let responseObject;

  beforeEach(() => {
    mockRequest = {}
    mockResponse = {
      statusCode: 0,
      send: jest.fn().mockImplementationOnce(result => {
        responseObject = result
      })
    }
  });

  test('200 - movies', () => {
    const expectedStatus = 200;
    const expectedResponse =  {
      movies: [
        {
          "title": "movie 1",
          "plot": "plot 1",
          "year": 1999
        },
        {
          "title": "movie 2",
          "plot": "plot 2",
          "year": 2000
        }

      ]
    };
    movieController.all(mockRequest as Request, mockResponse as Response, null)

    expect(mockResponse.statusCode).toBe(expectedStatus);
    expect(responseObject).toEqual(expectedResponse);
  });
})



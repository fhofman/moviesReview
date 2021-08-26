
# Movie review

This is a backend api rest for movie review.





## API Reference

#### Get all Movies

```http
  GET /movies
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `page`      | `number` |  page of pagination |
| `pageSize`      | `number` |  movies per page |
| `filterByTitle` | `string` |  Find searching complete or partial of the movie name |
| `order` | `string` |  Order by this field |
| `orderType` | `string` |  ASC \| DESC |

#### Get movie

```http
  GET /movies/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of movie to fetch |

#### Get movie reviews

```http
  GET /movies/${id}/review
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of movie to fetch theirs reviews |


#### Add new movie's reviews

```http
  POST /movies/${id}/review
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `score`      | `number` | **Required**. Score you give to the movie(1-5) |
| `comments`      | `string` | The movie comments |


#### Add new movie

```http
  POST /movies
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `title`      | `number` | **Required** Movie title |
| `plot`      | `string` | **Required** The movie plot |
| `year`      | `string` | **Required** The movie year |


#### Remove a movie but not phisicaly

```http
  DELETE /movies/${id}
```



## Installation

Install my-project with npm

```bash
  clone the project and cd into project
```
### Install my-project with npm
    1. Run `npm i` command
    2. Setup database settings inside `ormconfig.json` file
    3. Run `npm run start` command

### Install my-project with yarn
    1. Run `yarn install` command
    2. Setup database settings inside `ormconfig.json` file
    3. Run `yarn start` command
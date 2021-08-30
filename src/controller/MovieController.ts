import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Movie} from "../entity/Movie";

export class MovieController {

    private movieRepository = getRepository(Movie);

    async all(request: Request, response: Response, next: NextFunction) {
        const params = request.query;
        console.log(params)
        let movies = await this.movieRepository.createQueryBuilder('movie')
        .orderBy(""+params.order, "ASC")
        .skip(+params.page==0?0:+params.page*+params.pageSize)
        .take(+params.pageSize)
        .getMany();
        if(params.filterByTitle){
            movies = await this.movieRepository.createQueryBuilder('movie')
            .where("title like :name", { name:`%${params.filterByTitle}%` })
            .orderBy(params.order+"", "ASC")
            .skip(+params.page==0?0:+params.page*+params.pageSize)
            .take(+params.pageSize)
            .getMany();
        }
        //.paginate()
        return response.status(200).json(movies);
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.movieRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        console.log(request.body)
        return this.movieRepository.save(request.body);
    }

    async addReview(request: Request, response: Response, next: NextFunction) {
        let movie = await this.movieRepository.findOne(request.params.id);
        console.log(movie)
        if(!movie.reviews){
            movie.reviews = []
        }
        movie.reviews.push(request.body)
        return this.movieRepository.save(movie);
    }

    async getReviews(request: Request, response: Response, next: NextFunction) {
        let movie = await this.movieRepository.findOne(request.params.id);
        return response.status(200).json(movie.reviews);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let movieToRemove = await this.movieRepository.findOne(request.params.id);
        movieToRemove.deleted=true
        return this.movieRepository.save(movieToRemove);
        //await this.movieRepository.remove(movieToRemove);
    }

}
import { Movie } from './Movie';
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class Review {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    score: number;

    @Column()
    comments: string;

    @ManyToOne(type => Movie, movie => movie.reviews)
    movie: Movie;

}

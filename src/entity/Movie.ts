import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Review } from "./Review";

@Entity()
export class Movie {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true, nullable: false})
    title: string;

    @Column({ type: 'text', nullable: false })
    plot: string;

    @Column({ nullable: false })
    year: number;

    @Column()
    deleted : Boolean = false

    @OneToMany(type => Review, review => review.movie, { eager: true, cascade: true }) // note: we will create author property in the Photo class below
    reviews: Review[];

}

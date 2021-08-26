import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {pagination} from 'typeorm-pagination'
import {Movie} from "./entity/Movie";
import {Review} from "./entity/Review";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    app.use(pagination)

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    const port = process.env.PORT || 3000;
    app.listen(port);

    // insert new Movies for test
    await connection.manager.save(connection.manager.create(Movie, {
        title: "Back to the Future",
        plot: "Marty McFly, a 17 year old high school student gets lost in 1955 by an accident, 30 years back in time. With the help of his friend Dr. Emmet Brown, he is desperately trying to find his way back to the future in the year 1985. It becomes a battle against the clock.",
        year: 1989
    }));
    await connection.manager.save(connection.manager.create(Movie, {
        title: "Phantom of the Opera",
        plot: "A young soprano becomes the obsession of a disfigured and murderous musical genius who lives beneath the Paris Opéra House. Begins when an opera ghost terrorizes the cast and crew of the French Opera House while tutoring a chorus girl. He finally drives the lead soprano crazy so she and her friend leave.",
        year: 2004
    }));
    await connection.manager.save(connection.manager.create(Movie, {
        title: "Esperando la Carroza",
        plot: "Each member of this family tries to endorse someone else to care for the old Mother.",
        year: 1989
    }));
    await connection.manager.save(connection.manager.create(Movie, {
        title: "Star War",
        plot: "The seeds for the eventual rise of the evil Empire are sown in a seemingly routine place: a trade dispute between the Republic and the Trade Federation. Two Jedi, the keepers of peace and justice, are dispatched to negotiate the dispute, but (wait for it) it's a trap! They end up barely escaping with their lives, though they do meet R2-D2, who saves their lives. They end up on remote Tatooine, where they meet slave boy Anakin Skywalker and his protocol droid C3PO. Jedi Qui-Gon Jinn senses the Force in Anakin - and believes he's the \"Chosen One\" who will bring balance to the Force. There's a podrace and Anakin is freed. Qui-Gon wants to train Anakin, but the Jedi Council knows something is up with this boy and rejects it. But he helps the Republic win a battle against the Trade Federation so the Council lets Obi-Wan Kenobi take him as his apprentice.",
        year: 1975
    }));
    await connection.manager.save(connection.manager.create(Movie, {
        title: "Rocky",
        plot: "In a dark, seedy club, small-time fighter Rocky Balboa polishes off another nothing boxer, and gets a few dollars in winnings. Stepping out into the night, he walks through mean and broken-down streets, stopping to talk to the couple of people in the neighborhood who know him, including Adrian, his friend Paulie’s overly shy sister, who works in the local pet shop. There, he picks up some pet food, and walks over to his tiny, run-down apartment where only his turtles Cuff and Link wait for him.",
        year: 1976
    }));


    console.log("Express server has started on port 3000.");

}).catch(error => console.log(error));

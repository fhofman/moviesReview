import {MovieController} from "./controller/MovieController";

export const Routes = [{
    method: "get",
    route: "/movies",
    controller: MovieController,
    action: "all"
}, {
    method: "get",
    route: "/movies/:id",
    controller: MovieController,
    action: "one"
}, {
    method: "post",
    route: "/movies",
    controller: MovieController,
    action: "save"
}, {
    method: "delete",
    route: "/movies/:id",
    controller: MovieController,
    action: "remove"
}, {
    method: "post",
    route: "/movies/:id/review",
    controller: MovieController,
    action: "addReview"
},
{
    method: "get",
    route: "/movies/:id/review",
    controller: MovieController,
    action: "getReviews"
}];
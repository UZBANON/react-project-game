import MainPage from "../../mainPage/MainPage";
import Game from "../Game";
import Login from "../Login";

export const privateRoutes = [
    {path: "/game", component: Game, exact: true},
    {path: "/posts", component: MainPage, exact: true},
]
export const publicRoutes = [
    {path: "/login", component: Login, exact: true},
]
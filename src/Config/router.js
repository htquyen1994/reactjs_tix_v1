import Home from "../Pages/Home";
import Auth from "../Pages/Auth";

export const routerMain = [
    {
        path: "/",
        exact: true,
        Component: Home
    },
    {
        path: "/login",
        exact: false,
        Component: Auth
    }
];
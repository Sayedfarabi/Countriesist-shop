import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import CountryDetails from "../pages/countryDetails/CountryDetails";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Home from "../pages/home/Home";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "../components/private-route/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/countryDetails/:name",
                element: <PrivateRoute><CountryDetails></CountryDetails></PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://restcountries.com/v3.1/name/${params?.name}`)
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            }
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import ListadoLayoyt from "../layout/ListadoLayout";
import NotFound from "../error/NotFound";
import RegistroLayout from "../layout/RegistroLayout";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <NotFound/>
    },
    {
        path: "/participantes",
        element: <ListadoLayoyt/>,
        errorElement: <NotFound/>
    },
    {
        path: "/registro",
        element: <RegistroLayout/>,
        errorElement: <NotFound/>
    }
])
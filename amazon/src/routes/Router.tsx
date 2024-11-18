import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Dev from "../pages/Dev/Dev";
import SearchResult from "../pages/searchResult/searchResult";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
            
        path: "/dev",
        element: <Dev />,
    },
    {
        path: "/searchResult",
        element: <SearchResult />,
    },

]);

export default router

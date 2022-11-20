import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/index";
import { Home, New } from "../components/pages/index";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/new",
                element: <New />,
            },
        ],
    },

]);

export default router;
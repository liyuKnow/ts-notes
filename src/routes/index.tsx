import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/index";
import ProtectedRoute from "./Protected";
import { Home, New, Lost } from "../components/pages/index";

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
                element: <ProtectedRoute><New /></ProtectedRoute>,
            },
            {
                path: "*",
                element: <Lost />
            }
        ],
    },


]);

export default router;
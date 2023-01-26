import { createBrowserRouter } from "react-router-dom";

import Login from "../login/Index";
import Register from "../register/Index";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
])

export default router;
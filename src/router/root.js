import { createBrowserRouter } from "react-router-dom";

import Login from "../login/Index";
import Register from "../register/Index";
import User from "../user/Index";
import Protected from "../auth/Protected";

const router = createBrowserRouter([
    {
        path: "/register",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        element: <Protected />,
        children: [
            {
                path: "/user",
                element: <User />
            }
        ]
    }
])

export default router;
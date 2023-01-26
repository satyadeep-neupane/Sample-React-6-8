import { RouterProvider } from "react-router-dom";
import router from "./router/root";

function App()
{
    return(
        <div>
            <h1>My App</h1>
            <RouterProvider router={router} />
        </div>
    )
}

export default App;
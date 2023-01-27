import { Outlet, Navigate } from "react-router-dom";

function Protected(props){
    const token = ""

    if(token)
    {
        return <Outlet />
    }else{
        return <Navigate to="/login" />
    }
}

export default Protected;
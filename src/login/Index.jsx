import { useState } from "react";
import Input from "../common/Input";
import axios from "axios";

function Index(){
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState({});

    function setErr(key, value){
        setError({
            ...error,
            [key]: value
        })
    }

    function validate(name, value){
        let err = error

        switch(name){
            case "email":
                if(value.length === 0)
                    err.email = "Email is required";
                else if(!value.includes("@"))
                    err.email = "Email must contain @";
                else
                    err.email = "";
                break;
            case "password":
                if(value.length === 0)
                    err.password = "Password is required";
                else if(value.length < 8)
                    err.password = "Password must be at least 8 characters";
                else
                    err.password = "";
                break;
            default:
                break;
        }

        setErr(err);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;

        validate(name, value);

        setData({
            ...data,
            [name]: value
        })
    }

    const submitForm = async (e) => {
        e.preventDefault();

        for(const [key, value] of Object.entries(data)){
            validate(key, value);
        }

        if(Object.keys(error).length > 0)
            return;

        try{
            const result = await axios.post("http://localhost:5000/api/v1/login", data)
            console.log(result);
        }catch(err)
        {
            console.log(err.response.data);
            setError(err.response.data.error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={submitForm}>
                <Input 
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    value={data.email}
                    handler={handleChange}
                    error={error?.email} 
                />

                <Input 
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    value={data.password}
                    handler={handleChange}
                    error={error?.password}
                />

                <button>Login</button>
            </form>
        </div>
    )
}

export default Index;
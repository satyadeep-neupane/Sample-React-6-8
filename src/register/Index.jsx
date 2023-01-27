import { useState } from "react";
import axios from "axios";
import Input from "../common/Input";

function Index(){
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
  
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [error, setError] = useState({});

    function setErr(key, value){
        if(value)
        {
            setError({
                ...error,
                [key]: value
            })
        }else{
            setError({
                ...error,
            })
        }

    }

    function validate(name, value){
        let err = error

        switch(name){
            case "name":
                if(value.length === 0)
                    err.name = "Name is required";
                else
                    delete err.name
            case "email":
                if(value.length === 0)
                    err.email = "Email is required";
                else if(!value.includes("@"))
                    err.email = "Email must contain @";
                else
                    delete err.email
                break;
            case "password":
                if(value.length === 0)
                    err.password = "Password is required";
                else if(value.length < 8)
                    err.password = "Password must be at least 8 characters";
                else
                    delete err.password
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
    
    // const handleNameChange = (e) => {
    //     setName(e.target.value);
    // }

    // const handleEmailChange = (e) => {
    //     setEmail(e.target.value);
    // }

    // const handlePasswordChange = (e) => {
    //     setPassword(e.target.value)
    // }

    const submitForm = async (e) => {
        e.preventDefault();

        for(const [key, value] of Object.entries(data)){
            validate(key, value);
        }

        console.log(error)

        if(Object.keys(error).length > 0)
            return;

        try{
            const result = await axios.post("http://localhost:5000/api/v1/register", data);
            if(result.data.success)
            {
                setData({
                    name: "",
                    email: "",
                    password: ""
                })
            }
        }catch(err)
        {
            console.log(err.response.data.error);
            setError(err.response.data.error);
        }
    }

    return (
        <div>
            <h1>Register</h1>

            <form onSubmit={submitForm}>
                <Input label="Name" type="text" name="name" id="name" value={data.name} handler={handleChange} error={error?.name} />
                <Input label="Email" type="email" name="email" id="email" value={data.email} handler={handleChange} error={error?.email} />
                <Input label="Password" type="password" name="password" id="password" value={data.password} handler={handleChange} error={error?.password} />
                <button>Add</button>
            </form>
        </div>
    )
}

export default Index;
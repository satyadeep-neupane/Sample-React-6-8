import { useState } from "react";
import axios from "axios";
import Input from "../common/Input";

function Index(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const [isSuccess, setSuccess] = useState(false);
    
    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const submitForm = async (e) => {
        e.preventDefault();

        try{
            const result = await axios.post("http://localhost:5000/api/v1/register", {name, email, password});
            if(result.data.success)
            {
                setName("");
                setEmail("");
                setPassword("");
                setSuccess(true);
            }
        }catch(err)
        {
            console.log("error" + err);
        }
    }

    return (
        <div>
            <h1>Register</h1>

            { isSuccess && <p>User Added</p>} 

            <form onSubmit={submitForm}>
                <Input label="Name" type="text" name="name" id="name" value={name} handler={handleNameChange} />
                <Input label="Email" type="email" name="email" id="email" value={email} handler={handleEmailChange} />
                <Input label="Password" type="password" name="password" id="password" value={password} handler={handlePasswordChange} />
            
                <button>Add</button>
            </form>
        </div>
    )
}

export default Index;
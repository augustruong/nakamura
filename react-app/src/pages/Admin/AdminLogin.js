import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import words from "../../words";

export default function AdminLogin(){
    const navigate = useNavigate();
    const token = localStorage.getItem('token')
    useEffect(() => {
        if (token != null) {
            navigate('/admin/home');
        }
    }, []);
    
  
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
  
        axios.post(words.api.admin.login, inputs).then(function(response){
            console.log(response);
            localStorage.setItem('token', response.data.token)
            navigate('/admin/home');
        });
    }
    return(
        <div>
        <div className="container h-100">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label>Username</label>
                      <input type="text" className="form-control" name="username" onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label>Password</label>
                      <input type="text" className="form-control" name="password" onChange={handleChange} />
                    </div>   
                    <button type="submit" name="add" className="btn btn-primary">Save</button>
                </form>
                </div>
                <div className="col-2"></div>
            </div>
        </div>
    </div>
    )
}
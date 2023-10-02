import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Login() {
    const [logged,setLogged] = useState({
        username: "",
        password:"",
    })
    const users = useSelector(state => state.users)
const handleInput = (e)=>{
   const property = e.target.name
    setLogged(prevState=> ({...prevState,[property]:e.target.value}))
   
}


  return (
    <div>
      <div className="form-floating mb-3">
        <input
          name="email"
          type="email"
          className="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          onChange={handleInput}
        />
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating">
        <input
           name="password"
           type="password"
          className="form-control"
          id="floatingPassword"
          placeholder="Password"
          onChange={handleInput}
        />
        <label htmlFor="floatingPassword">Password</label>
      </div>
      <button>Log I</button>
    </div>
  );
}
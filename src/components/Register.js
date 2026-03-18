import React, { useState } from "react";
import axios from "axios";

function Register() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    weight: "",
    height: "",
    fitnessGoal: ""
  });

  const handleChange = (e) => {
    setUser({...user, [e.target.name]: e.target.value});
  };

  const registerUser = async () => {
    await axios.post("http://localhost:8081/auth/register", user);
    alert("User Registered!");
  };

  return (
    <div>
      <h2>Register</h2>

      <input name="name" placeholder="Name" onChange={handleChange}/>
      <br/>

      <input name="email" placeholder="Email" onChange={handleChange}/>
      <br/>

      <input name="password" placeholder="Password" onChange={handleChange}/>
      <br/>

      <input name="age" placeholder="Age" onChange={handleChange}/>
      <br/>

      <input name="weight" placeholder="Weight" onChange={handleChange}/>
      <br/>

      <input name="height" placeholder="Height" onChange={handleChange}/>
      <br/>

      <input name="fitnessGoal" placeholder="Fitness Goal" onChange={handleChange}/>
      <br/>

      <button onClick={registerUser}>Register</button>

    </div>
  );
}

export default Register;
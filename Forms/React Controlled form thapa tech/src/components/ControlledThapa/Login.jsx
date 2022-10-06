import React, { useState } from "react";
import './Login.css'

const Login = () => {
    const [name, setName] = useState('')
    const [fullName, setFullName] = useState()
    const inputEvent = (e) => {
      console.log('click', e.target.value)
      setName(e.target.value)
      // setPassword(e.target.value)
    }
    const onsubmit = () => {
      setFullName(name)
      console.log(name)
      setName('')
    }
    return (
      <div className="App">
        <h1>React Controlled</h1>
        <h1>Email: {fullName}</h1>
        <input value={name} type="email" onChange={inputEvent} name="" id="" placeholder='Enter your name' />
        <button onClick={onsubmit}>Login</button>
      </div>
    );
}
export default Login
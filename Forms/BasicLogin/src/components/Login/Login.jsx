import React, { useState } from "react";

const Login = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [body, setBody] = useState({ email: '', password: '' })
    const submitValue = () => {
        setEmail(body.email)
        setPassword(body.password)
        console.log('body=>', body)
        setBody({ email: '', password: '' })
    }
    return (
        <div>
            <h1>Basic Login</h1>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <div className="">
                <label htmlFor="">Email: </label>
                <input type="text" value={body.email} onChange={(text) => setBody({ ...body, email: text.target.value })} placeholder='Email' name="" id="" /> <br />
                <label htmlFor="">Password: </label>
                <input type="text" value={body.password} onChange={(text) => setBody({ ...body, password: text.target.value })} placeholder='Password' name="" id="" /> <br />
                <button onClick={submitValue}>Login</button>
            </div>
        </div>
    )
}
export default Login
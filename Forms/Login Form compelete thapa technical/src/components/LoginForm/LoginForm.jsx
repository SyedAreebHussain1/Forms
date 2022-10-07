import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState({ email: "", password: "" })
    const navigate = useNavigate();
    const logIn = (e) => {
        e.preventDefault();
        if (email && password) {
            navigate('/about', { state: { email: email, password: password } });
            setEmail('')
            setPassword('')
        } else {
            alert('Please')
        }
    }
    return (
        <>
            <form action="" onSubmit={logIn}>
                <div>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(text) => setEmail(text.target.value)} type="email" name="email" id="email" autoComplete="off" />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input value={password} onChange={(text) => setPassword(text.target.value)} type="password" name="password" id="password" autoComplete="off" />
                </div>
                <button type='submit'>Login</button>
            </form>
            <div>
            </div>
        </>
    )
}

export default LoginForm
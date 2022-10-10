import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "../components/About/About";
import LoginForm from "../components/LoginForm/LoginForm";

const AppRoute = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<LoginForm />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}
export default AppRoute
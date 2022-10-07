import React from "react"
import { useLocation } from "react-router-dom";

const About = () => {
    const location = useLocation();
    console.log(location.state);
    return (
        <div>
            <h1>About Page</h1>
            <p>{location.state.email}</p>
        </div>
    )
}
export default About

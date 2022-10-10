import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function About() {
  const [data, setData] = useState("");
  console.log(data)
  const location = useLocation();
  console.log(location.state);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <div>
      <h1>About</h1>
      <h4>Name: {location.state.name}</h4>
      <h4>Email: {location.state.email}</h4>

      <p>{data.title}</p>
      <p>{data.id}</p>
    </div>
  );
}
export default About;

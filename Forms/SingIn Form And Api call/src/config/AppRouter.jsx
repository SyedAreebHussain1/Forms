import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "../formvalidation/Registration/Registration";
import About from "../components/About/About";
function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Registration />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;

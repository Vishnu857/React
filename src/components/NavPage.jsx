import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./pages/Home"
import Trip from "./pages/trip"
import Employee from "./pages/employee"
import Driver from "./pages/driver"
const NavPage = () => {
  return <React.Fragment><section>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/employee" element={<Employee/>}/>
        <Route path="/trip" element={<Trip/>}/>
        
        <Route path="/driver" element={<Driver/>}/>
    </Routes>
  </section>
  </React.Fragment>
};

export default NavPage;

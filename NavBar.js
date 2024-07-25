import React from "react";
import { NavLink } from "react-router-dom";
export default function NavBar()
{
    return (
    <nav>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to ="/Services">Services</NavLink>
        

    </nav>)
}
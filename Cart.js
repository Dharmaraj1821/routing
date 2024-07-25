import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Cart()
{
    const navigate=useNavigate();

    return (
    <div>
        
        added to cart 
        <button type="button" onClick={()=>navigate("-1")}>Go back</button>
        </div>)
}
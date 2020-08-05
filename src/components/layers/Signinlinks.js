import React from "react";
import { NavLink } from "react-router-dom";
const Signinlinks = () => {
  return (
    <ul className="right">
       <li>
        <NavLink to="/">Home</NavLink>
      </li> 
      <li>
        <NavLink to="/">Log out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating red lighten-1">CH</NavLink>
      </li>
    </ul>
  );
};

export default Signinlinks;

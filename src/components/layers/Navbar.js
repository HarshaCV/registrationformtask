import React from "react";
import { Link } from "react-router-dom";
import Signinlinks from "./Signinlinks";
import Signoutlinks from "./Signoutlink";
import { connect } from "react-redux";
const Navbar = () => {
  return (
    <nav className="nav-wrapper indigo">
      <div className="container">
        <Link to="/" className="brand-logo left"></Link>
        <Signinlinks />
        <Signoutlinks />
      </div>
    </nav>
  );
};

export default (Navbar);

// const mapStateToProps =(state)=>{
//   console.log(state);
//   return{
//     auth: state.firebase.auth

//   }
// }
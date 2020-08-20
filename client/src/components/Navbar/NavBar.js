import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import logo from "../images/logo.png"

let NavBar=()=>{
    return(
        <Fragment>
          <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
              <div className="container-fluid">
                  <Link to="/" className="navbar-brand">
                    <img src={logo} alt="logo" width="100" height="30"/>
                  </Link>
                  <div className="collapse navbar-collapse">
                      <ul className="navbar-nav">
                          <li className="nav-item">
                              <Link to="/Seller" className="nav-link">Seller</Link>

                          </li>
                          <li className="nav-item">
                              <Link to="/Buyer" className="nav-link">Buyer</Link>

                          </li>
                          <li className="nav-item">
                              <Link to="/Upload" className="nav-link">Upload</Link>

                          </li>
                          </ul>
                          <ul className="navbar-nav ml-auto">
                              <li className="nav-item">

                              <Link to="/Login" className="nav-link">Login</Link>
                              </li>
                              <li>
                              <Link to="/Register" className="nav-link">Register</Link>
                              </li>
                          </ul>


                    

                  </div>
              </div>
          </nav>
        </Fragment>
    )
}

export default NavBar;
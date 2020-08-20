import React,{Fragment} from "react";
import {Link} from "react-router-dom";
import  { useState, useEffect } from "react";
import {useHistory} from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../../Redux/user/userActions";


let Login=()=>{
    let dispatch = useDispatch();
    let history=useHistory();
    let [user,setUser] =useState({
        email:"",
        password:""
    })
    
    let submitLogin=(e)=>{
        e.preventDefault();
        console.log('event tiggered');
       dispatch(loginUser(user,history));

    }    
    return(
        <Fragment>
            <pre>{JSON.stringify(user)}</pre>
           .<div className="container mt-3">
               .<div className="row">
                   <div className="col-md-4 m-auto">
                       <div className="card animated jello">
                           <div className="card-header bg-info text-white">
                                <h2>Login here</h2>
                           </div>
                           <div className="card-body bg-light">
                               <from onSubmit={submitLogin}>
                                  <div className="form-group">
                                      <input 
                                        value={user.email}
                                        onChange= {e=>setUser({...user,email: e.target.value })}
                                      type="Email" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                      <input 
                                       value={user.password}
                                       onChange= {e=>setUser({...user,password: e.target.value })}
                                      type="password" className="form-control" placeholder="password"/>
                                      </div>
                                      <div className="form-group">
                                      <input type="submit" value="login" className="btn btn-info "/>
                                      </div>
                                    <p>Don't have an account?</p> 
                                    <Link to="/register" className="font-weight-bold">Register</Link>

                               </from>



                           </div>
                                
                       </div>

                   </div>
               </div>
           </div>
        </Fragment>
    )
}

export default Login;
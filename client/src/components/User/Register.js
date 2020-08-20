import React,{Fragment} from "react";
import {Link} from "react-router-dom";
//import { setupMaster } from "cluster";
import  { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {registerUser} from "../../Redux/user/userActions";
import {useHistory} from "react-router-dom"
//import {registerUser} from "../../Redux/user/dumyuseraction"
 
let Register=()=>{
    let dispatch=useDispatch();
    let history=useHistory();
    
    let [user,setUser]=useState({
        name :"",
        email:"",
        password:null,
        phonenumber:null,
        role:""

})

let submitRegister=(e)=>{
    e.preventDefault();
    console.log('event tiggered');
    //REDUX CALL
    dispatch(registerUser(user,history));
    //registerUser(user,history)
    console.log("output came");
   
}
return(
        <Fragment>
    
          <div className="container mt-3">
               .<div className="row">
                   <div className="col-md-4 m-auto">
                       <div className="card animated jello">
                           <div className="card-header bg-info text-white">
                                <button  value={user.role} onClick={e=>{setUser({...user,role:e.target.value})}}>BUYER</button>
                                <button value={user.role} onClick={e=>{setUser({...user,role:e.target.value})}}>SELLER</button>
                            </div>
                           <div className="card-body bg-light">
                               <form onSubmit={submitRegister}>
                               <div className="form-group">
                                      <input 
                                      value={user.name}
                                      onChange= {e=>setUser({...user,name: e.target.value })}
                                      type= "text" className="form-control" placeholder="username"/>
                                </div>
                                  <div className="form-group">
                                      <input 
                                       value={user.email}
                                       onChange= {e=>setUser({...user,email: e.target.value })}
                                        type="text" className="form-control" placeholder="email"/>
                                    </div>
                                    <div className="form-group">
                                      <input 
                                      value={user.password}
                                      onChange= {e=>setUser({...user,password: e.target.value })}
                                      type="password" className="form-control" placeholder="password"/>
                                      </div>
                                      <div className="form-group">
                                      <input 
                                      value={user.phonenumber}
                                      onChange= {e=>setUser({...user,phonenumber: e.target.value })}
                                      type="phonenumber" className="form-control" placeholder="phonenumber"/>
                                      </div>

                                    <select>
                                    <option value="Select">Select</option>  
                                    <option  onSelect= {e=>setUser({...user,role: e.target.value })} value="Seller">Seller</option>
                                    <option   onSelect= {e=>setUser({...user,role: e.target.value })} value="buyer">buyer</option>
                                    </select>
                                    <div className="form-group">
                                      <input type="submit" value="signup" className="btn btn-info "/>
                                      </div>
                                   
                                    <p>Already i have account</p> 
                                    <Link to="/Login" className="font-weight-bold">Login</Link>

                               </form>



                           </div>
                                
                       </div>

                   </div>
               </div>
           </div>
        </Fragment>
        
    )
}

export default Register;
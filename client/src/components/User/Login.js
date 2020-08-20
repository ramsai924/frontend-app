import React, {Fragment, useState} from "react";

import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {loginUser} from "../../Redux/user/userActions"

let Login = () => {
    let dispatch = useDispatch();
    let history = useHistory();

    let [user, setUser] = useState({
        email : '',
        password : ''
    });

    let submit = (e) => {
        e.preventDefault();
        console.log("login triggerd");
        dispatch(loginUser(user,history));
    };

    return (
        <Fragment>
            <pre>{JSON.stringify(user)}</pre>
            <div className="container mt-3">
                <div className="row">
                    <div className="col-md-4 m-auto">
                        <div className="card animated jello">
                            <div className="card-header bg-info text-white">
                                <h3>Login Here</h3>
                            </div>
                            <div className="card-body bg-light">
                                <form onSubmit={submit}>
                                    <div className="form-group">
                                        <input
                                            value={user.email}
                                            onChange={e => setUser({...user, email : e.target.value})}
                                            type="text" className="form-control" placeholder="Email"/>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            value={user.password}
                                            onChange={e => setUser({...user, password : e.target.value})}
                                            type="password" className="form-control" placeholder="Password"/>
                                    </div>
                                    <div>
                                        <input type="submit" value="login" className="btn btn-info btn-sm"/>
                                    </div>
                                    <p className="text-white">Don't have an account ?
                                        <Link to="/register" className="text-warning font-weight-bold"> Register</Link>
                                    </p>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
export default Login;
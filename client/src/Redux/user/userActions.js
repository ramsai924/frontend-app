import {REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS,REGISTER_USER_FAILURE} from "./userActionTypes";
import {LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS,LOGIN_USER_FAILURE} from "./userActionTypes";
//import { url } from "inspector";
import Axios from "axios";

//for registaion

let registerUser=(user,history)=>{
    console.log(user);
    return async(dispatch)=>{
        try{
            dispatch({
                type:REGISTER_USER_REQUEST
            });

        let config={
            headers:{
                'content-Type':'application/json'
            }
        }
        console.log("request is ready to send");
        
        let response =await Axios.post('https://capstone-backend-api.herokuapp.com/auth/registerSeller',JSON.stringify(user),config);
          console.log(response);
        dispatch({
            type:REGISTER_USER_SUCCESS,
            payload:response.data
        });
       // dispatch(setAlert("Registration is Success",'success'))
        history.push('./Login')
        }

        catch(err){
            let errorList=err.response.data.errors;
            console.error(errorList);
            dispatch({
                type:REGISTER_USER_FAILURE,
                payload:errorList
            })

        }
    };

};



//for login


let loginUser=(user,history)=>{
    console.log(user);
    return async(dispatch)=>{
        try{
            dispatch({
                type:LOGIN_USER_REQUEST
            });

        let config={
            headers:{
                'content-Type':'application/json'
            }
        }
        console.log("request is ready to send");
        
        let response =await Axios.post('https://capstone-backend-api.herokuapp.com/auth/loginseller',JSON.stringify(user),config);
          console.log(response);
        dispatch({
            type:LOGIN_USER_SUCCESS,
            payload:response.data
        });
       // dispatch(setAlert("Registration is Success",'success'))
        history.push('./Seller')
        }

        catch(err){
            let errorList=err.response.data.errors;
            console.error(errorList);
            dispatch({
                type:LOGIN_USER_FAILURE,
                payload:errorList
            })

        }
    };

};






export {registerUser,loginUser};
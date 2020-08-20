import Axios from "axios"
let registerUser= async (user,history)=>{
    console.log("i am triggering");
// fetch("https://capstone-backend-api.herokuapp.com/auth/registerSeller",{
//     method:"POST",
//     headers:{
//         "Access-Control-Allow-Origin":"*",
//         'Content-Type':'application/json'
//     },
//     body:JSON.stringify(user)

// }).then((response)=>{
//     console.log("got response");
// },(error)=>{
// console.log(error)
// })

let config={
    headers:{
        'content-Type':'application/json',
    }

}

let response = await Axios.post('https://capstone-backend-api.herokuapp.com/auth/registerSeller',JSON.stringify(user),config);

console.log(response);

}

let loginUser= async (user,history)=>{
    console.log("i am triggering");

let config={
    headers:{
        'content-Type':'application/json',
    }

}

let response = await Axios.post('https://capstone-backend-api.herokuapp.com/auth/registerSeller',JSON.stringify(user),config);

console.log(response);

}

export {registerUser,loginUser};
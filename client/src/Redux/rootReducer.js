import {combineReducers} from "redux";
import {userReducer} from "./user/userReducer";
import {alertReducer} from "./alert/alertReducer"
let rootReducer=combineReducers({
    user: userReducer,
    alert:alertReducer
});

export {rootReducer};
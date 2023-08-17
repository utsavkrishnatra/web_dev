
//this is example of how to use multiple reducer functions

import {combineReducers} from "redux";
import batReducer from "./reducers/batReducer";
import ballReducer from "./reducers/ballReducer";
import userReducer from "./reducers/userReducer";

//this root reducer is for using multiple reducer functions
// const rootReducer= combineReducers({
//     Bat: batReducer,
//     Ball: ballReducer,
// });

//this root reducer is for using multiple reducer functions with async function User
const rootReducer= combineReducers({
    Bat: batReducer,
    Ball: ballReducer,
    User:userReducer,
});


export default rootReducer;
import initialState from "./initialState.json";
import * as actionTypes from "../actionTypes";
import documentReducer from "./documentReducer";
import contactReducer from "./contactReducer";
import { combineReducers } from "redux";
import educationReducer from "./educationReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    contactReducer: contactReducer,
    documentReducer: documentReducer,
    educationReducer: educationReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    auth: authReducer


})
export default rootReducer;

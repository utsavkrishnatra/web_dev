import { createStore,applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducer";

// firebase 
import { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import thunk from 'redux-thunk';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/auth';
import firebaseConfig from "../secrets";
import { composeWithDevTools } from "redux-devtools-extension";

firebase.initializeApp(firebaseConfig);
firebase.firestore();
let store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware
            (thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(firebase))
);
export default store;
import { createStore,applyMiddleware } from "redux";

import rootReducer from "./rootReducer";

import thunk from 'redux-thunk'
//this is an example of async function in redux using middleware
const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;



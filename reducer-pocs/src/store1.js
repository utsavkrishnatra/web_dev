
import { createStore } from "redux";

import rootReducer from "./rootReducer";

//this is example of how to use multiple reducer functions.
const store = createStore(rootReducer);

export default store;


//this is an example of async function in redux using middleware



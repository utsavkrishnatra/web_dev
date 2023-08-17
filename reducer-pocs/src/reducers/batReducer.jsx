
let initialState={
    bats:10,
    value:""
}

function batReducer(state=initialState,action) {
    
    switch (action.type) {
        case "Buy":
            return {bats:state.bats + Number(state.value), value:""}
        case "Sell":
            if(state.bats>=Number(state.value)){
                return {bats:state.bats - Number(state.value), value:""}  
            }else{
                return {...state,value:""};
            }
               
        case "setVal":
            return {...state, value:action.payload}
        default:
            return state;
    }
}

export default batReducer;

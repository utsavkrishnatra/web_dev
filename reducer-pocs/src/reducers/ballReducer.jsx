let initialState={
    balls:10
}
function ballReducer(state=initialState,action) {
    
    switch (action.type) {
        case "INCREMENT":
            return {balls:state.balls + 1}
        case "DECREMENT":
            return {balls:state.balls - 1};      
        default:
            return state;
    }
}

export default ballReducer;
let initialState={
    users:"",
    loading:true
}

function userReducer(state=initialState,action){
    switch (action.type) {
        case "success_data":
            console.log(action.payload);
         return {
            users:action.payload,
            loading:false
         }
        default:
            return state;
    }
}

export default userReducer;
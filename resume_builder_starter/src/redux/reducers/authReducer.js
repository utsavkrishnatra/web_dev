import * as actionTypes from "../actionTypes";
import initialState from "./initialState.json";
export default function authReducer(state = initialState.auth, action) {
    switch (action.type) {
        case actionTypes.SIGN_IN_FAILED:
            return {

                ErrorMessage: action.payload,
                loading: false

            }
        case actionTypes.SIGN_IN_REQUEST:
            return {
                ErrorMessage: "",
                loading: true
            }
        case actionTypes.SIGN_IN_SUCCESS:
            return {
                
                ErrorMessage: "",
                loading: false

            }
        case actionTypes.SIGN_OUT_FAILED:
                return {
    
                    ErrorMessage: action.payload,
                    loading: false
    
                }
        case actionTypes.SIGN_OUT_REQUEST:
                return {
                    ErrorMessage: "",
                    loading: true
                }
        case actionTypes.SIGN_OUT_SUCCESS:
                return {
                  
                    ErrorMessage: "",
                    loading: false
    
                }    
                case actionTypes.REGISTER_REQUEST:
                    return {
                        
                        ErrorMessage: "",
                        loading: true
                    } 
                case actionTypes.REGISTER_SUCCESS:
                    return {
                        
                        ErrorMessage: "",
                        loading: false
                    }   
                case actionTypes.REGISTER_FAILED:
                    return {
                        
                        ErrorMessage: action.payload,
                        loading: false
                    }            
                case actionTypes.REMOVE_ERROR:
                    return {
                        
                        ErrorMessage: "",
                        loading: false
                    }
        default:
            return state;
    }
}
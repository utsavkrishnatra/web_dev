import React from 'react'
import {Route, Redirect} from 'react-router-dom';
import {isLoaded,isEmpty} from 'react-redux-firebase';
import {useSelector} from "react-redux"

function PrivateRoute({component:Component,...remainingProps}) {
    //alternative to mapStateToProps
    const auth = useSelector(state=>state.firebase.auth);

    return (

    <Route {...remainingProps}
     render={({props})=> {
       return isLoaded(auth) && !isEmpty(auth)?<Component {...props}/>:<Redirect to="/login"/>
     }}/>
    
  );
};

export default PrivateRoute
import React, { useContext } from "react";
import {Redirect, Route,Switch} from 'react-router-dom'
import Login from "../../reels/src/components/Login";
import Feed from "../../reels/src/components/Feed";
import PageNotFound from "../../reels/src/components/PageNotFound";
import Signup from "../../reels/src/components/Signup";
import Profile from "../../reels/src/components/Profile";
import {AuthContext,AuthContextProvider} from "./context/AuthContext";
function App() {
  return (
    <>
  <AuthContextProvider>
    <Switch>
      <PrivateRoute path="/feed" comp={Feed}></PrivateRoute>
      <RedirectToFeed path="/login" comp={Login}> </RedirectToFeed>
      {/* <Route path="/login"><Login/></Route> */}
      <RedirectToFeed path="/signup" comp={Signup}> </RedirectToFeed>
      <PrivateRoute path="/profile" comp={Profile}></PrivateRoute>
      <Redirect from="/" to="/feed"></Redirect>
      <Route> <PageNotFound></PageNotFound></Route>
      
    </Switch>
  </AuthContextProvider>
    </>
  );
}

function PrivateRoute(props){
  
  let Component = props.comp;
  let cUser= useContext(AuthContext)

  return(
    <Route {...props.path} render={
      (props)=>{
          return cUser!=null?<Component ></Component>:<Redirect to="/login" {...props}></Redirect>
      }
    }
    >


    </Route>
  )
}

function RedirectToFeed(props) {
  
  let Component = props.comp
  let cUser= useContext(AuthContext);

  return(
    <Route {...props.path} render= {
    (props)=>{
      return cUser!= null?<Redirect to="/feed" {...props}></Redirect> :<Component></Component>
    }}>

    </Route>
  )
}

export default App;
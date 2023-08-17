import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import userFetchMiddleware from '../middlewares/userFetechMiddleware'
function User(props) {

 
  useEffect(()=>{

    setTimeout(props.fetchUser,2000)
   
    
  },[])
  return (
    <>
   
     {props.loading == true?<h1>Loading </h1>:<h1>{props.users.name}</h1>}
    </>
  )
}

const mapStateToProps=(store)=>{
      return store.User;
}

const mapDispatchToProps=(dispatch)=>{
  return{
    // we are dispatching a function instead of an action object.
    fetchUser: ()=>dispatch(userFetchMiddleware)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(User)
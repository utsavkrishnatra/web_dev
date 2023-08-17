import React, { useEffect } from 'react'
import { useState } from 'react'
import { auth } from "../firebase"
import { signInWithEmailAndPassword, onAuthStateChanged,signOut } from "firebase/auth"

function Login() {
  let [error, setError] = useState("");
  let [loader, setLoader] = useState(false);
  let [email, setEmail] = useState("");
  let [passwd, setPass] = useState("");
  let [user, setUser] = useState(null);
  // let [main, setMain] = useState(true);

  const trackEmail = (e) => {
    setEmail(() => { return e.target.value })

  }

  const trackPass = (e) => {

    setPass(() => e.target.value)
  }

  const signout = async function () {
    await signOut(auth);
    setUser( null)
  }
  const printDetails = async function () {

    try {
      setLoader(() => true)
      let userCred = await signInWithEmailAndPassword(auth, email, passwd)
      setUser(() => userCred.user)
      //console.log(userCred.user);
      alert(email + " " + passwd)
    } catch (error) {
      setError(() => error.message)
      console.log(error);
      setTimeout(() => {
        setError(() => "")

      }, 2000)

    }
    setLoader(() => false)

  }

  // // this function is directly taken from firebase
  // useEffect(() => {

  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in, see docs for a list of available properties
  //       // https://firebase.google.com/docs/reference/js/firebase.User
  //       // console.log(user);
  //       setUser(()=>user)

  //       // ...
  //     } else {
  //       // User is signed out
  //       // ...
  //       setUser(null)
  //     }
  //     setMain(()=>false)
  //   });
  // },[])

  

  return (


    <>

      {
      //  main==true? <h1> ...Loading </h1>:
        error != "" ? <h1>Error is {error}</h1> :
          loader == true ? <h1>...Loading</h1> :
            user != null ? <> <button onClick={signout}>Sign Out</button><h1>User is {user.uid}</h1> </>
              : <> <input type="email" onChange={trackEmail} value={email} placeholder="email"></input>
                <br></br>
                <input type="password" onChange={trackPass} value={passwd} placeholder="password"></input>
                <br></br>
                <button type="click" onClick={printDetails}>Login</button>
              </>
      }
    </>
  )
}

export default Login
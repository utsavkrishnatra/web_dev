import React, { useState } from 'react'
import { createUserWithEmailAndPassword, fetchSignInMethodsForEmail, EmailAuthProvider } from 'firebase/auth'
// import { collection, addDoc } from "firebase/firestore";
import { collection, setDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase';
import { db } from '../firebase';


function Signup() {
  let [error, setError] = useState("");
  let [loader, setLoader] = useState(false);
  let [email, setEmail] = useState("");
  let [passwd, setPass] = useState("");
  let [user, setUser] = useState(null);
  let [name, setName] = useState("");


  const trackName = (e) => {
    setName(() => e.target.value)
  }

  const trackEmail = (e) => {
    setEmail(() => { return e.target.value })

  }

  const trackPass = (e) => {

    setPass(() => e.target.value)
  }

  // async function checkForEmailAndPassword(signInMethods) {
  //   // This returns the same array as fetchProvidersForEmail but for email
  //   // provider identified by 'password' string, signInMethods would contain 2
  //   // different strings:
  //   // 'emailLink' if the user previously signed in with an email/link
  //   // 'password' if the user has a password.
  //   // A user could have both.
  //   try {
  //     let userCred = undefined
  //     if (signInMethods.indexOf(EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD) != -1) {
  //       // User can sign in with email/password.
  //       userCred = await createUserWithEmailAndPassword(auth, email, passwd)
  //       console.log(userCred);
  //     }
  //     if (signInMethods.indexOf(EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD) != -1) {
  //       // User can sign in with email/link.
      
  //     }

  //     return userCred
  //   }
  //   catch (e) {
  //     throw new Error("user is already defined!!")
  //   }

  // }

  async function processSignup() {

    try {
      setLoader(() => true)
      //authentication
     // let signInMethods = await fetchSignInMethodsForEmail(auth, email)
      // let userCred = await checkForEmailAndPassword(signInMethods)
      let userCred= await createUserWithEmailAndPassword(auth, email, passwd);
      // console.log(userCred);
     
      //for UI
      setUser(() => userCred.user)
      // console.log(userCred);
      //set FireStore, WE ARE USING VERSION 9.0
      // const docRef = await addDoc(collection(db, "users",userCred.user.uid), {
      //   email,
      //   name,
      //   reedIds: [],
      //   profileImg: "",
      //   userId: userCred.user.uid

      // });
      // In Firestore, we are setting doc with our custom User ID instead of the default once provided by the firestore.
      // filling up the credentials taken from the user from the signup page.
      await setDoc(doc(db, "users", userCred.user.uid), {
        //taken from the the user
        email,
        //taken from the the user
        name,
        reelIds: [],
        profileImg: "",
        userId: userCred.user.uid
      });



      // console.log("Document written with ID: ", docRef.id);
      //console.log(userCred.user);
      alert(email + " " + passwd)
    } catch (error) {
      alert(error.message)
      setError(() => error.message)
      setTimeout(() => {
        setError(() => "")

      }, 2000)

    }
    setLoader(() => false)

  }

  return (
    <>

      {

        error != "" ? <h1>Error is {error}</h1> :
          loader == true ? <h1>...Loading</h1> :
            user != null ? <h1>User is {user.uid}</h1> :
              <>
                <input type="email" onChange={trackEmail} value={email} placeholder="email"></input>
                <br></br>
                <input type="password" onChange={trackPass} value={passwd} placeholder="password"></input>
                <br></br>
                <input type="text" onChange={trackName} value={name} placeholder="Full Name"></input>
                <br></br>
                <button type="click" onClick={processSignup}>Signup</button>
              </>
      }
    </>
  )
}

export default Signup

// This page runs only once in its lifetime, until the app is refreshed.
import { onAuthStateChanged } from 'firebase/auth';
import React, {useState, useEffect} from 'react'
import { auth } from '../firebase';
export const AuthContext = React.createContext();


export function AuthContextProvider({children}){
  let [cUser, setUser] = useState(null);
  let [mainLoader, setMain] = useState(true);

    useEffect(() => {

       let unsubscribe= onAuthStateChanged(auth, (user) => {
          if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            // console.log(user);
            setUser(()=>user)
            
            // ...
          } else {
            // User is signed out
            // ...
            setUser(null)
          }
          
            setMain(()=>false)
            return unsubscribe;
          
        });
      },[])
      
      return(
        <AuthContext.Provider value={cUser}>
            {mainLoader === false && children}
        </AuthContext.Provider> 
      )
}
 
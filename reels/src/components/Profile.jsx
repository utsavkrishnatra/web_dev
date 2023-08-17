import React, { useEffect, useState } from 'react'
import "./profile.css"
import { useContext, useMemo } from 'react'
import { doc, getDoc } from "firebase/firestore";
import { AuthContext } from '../context/AuthContext'
import { db } from '../firebase';



function Profile() {

  let user = useContext(AuthContext)

  let [userData, setData] = useState()
  let [pageLoading, setPageLoading] = useState(false);

    
  
  // this function is going to fire on mount and every update
   useEffect(() => {
    
    ( async () => {
      const docRef = doc(db, "users", user.uid);
      const userObj = await getDoc(docRef);
  
      if (userObj.exists()) {
        console.log("Document data: ", userObj.data());
  
  
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
  
      setData(()=>userObj.data())
      
      setPageLoading(()=>false);
    })();
   
  }, [])



  return (
    <>
      {pageLoading == true ? <div>Loading...</div> :

        <>
          <div className="Header"></div>
          <div className="Main">
            <div className="pimg_container">
              <img src="http://via.placeholder.com/640x360" alt="" />
            </div>
            <div className="details">

              <div className="content">{userData != undefined && userData.name}</div>
              <div className="content">No. of Posts:  <span className='bold_text' >{userData != undefined && userData.reelIds.length}</span></div>
              <div className="content">Email: <span className='bold_text'>{userData != undefined && userData.email}</span></div>
            </div>
          </div>
        </>
      }


    </>)
}

export default Profile
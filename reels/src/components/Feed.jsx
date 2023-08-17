import React from 'react'
import "./feed.css"
import { useEffect } from 'react';
function Feed() {


  useEffect(()=>{
    // This shows that page is mounted and unmounted on every route switch
    console.log("Hello Feed!!");
},[])
  return (
    <>
    <div className='Header'><img className='insta_img'src="https://www.instagram.com/static/images/web/logged_out_wordmark-2x.png/d2529dbef8ed.png" alt="" />
    
    </div>
    <div className="main_container">
       <div className="upload_container">
        
           <img className="feed_img" src="https://icons-for-free.com/download-icon-add+photo+plus+upload+icon-1320184050039319890_0.svg" alt="" /> 
            <h3 className='upload_text'>UPLOAD CONTENT</h3>
     
    </div>
    <div className="reels_container"> Reels</div>
   
    </div>
  
    </>
  )
}

export default Feed
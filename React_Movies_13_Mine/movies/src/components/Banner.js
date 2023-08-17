import React, { Component } from 'react'


export class Banner extends Component {

  // randomPageCall= ()=>{
  //     let rnum=Math.ceil(Math.random()*10);

  // }
  render() {
    let backDrop="/6EdKBYkB1ssgGjc249ud1L55o8d.jpg"
    return (
        <div className="card banner-card">
        <img src={`https://image.tmdb.org/t/p/original/${backDrop}`} className="card-img-top banner-img"  alt="..."/>
        
          <h5 className="card-title banner-title">Card title</h5>
          <p className="card-text banner banner-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
        
      </div>
    )
  }
}

export default Banner
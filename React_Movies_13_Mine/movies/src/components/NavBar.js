import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class NavBar extends Component {
  
  render() {
    return (

      <div style={{display:'flex', padding:'0.5rem'}}>

          {/* link is a substitute of anchor tag */}
          <Link to='/' style={{textDecoration:'none'}}> <h1>Movies App</h1></Link>
          <Link to='/favourites' style={{textDecoration:'none'}}><h2 style={{marginLeft:"2rem",marginTop:'1.618rem'}}>Favourites</h2></Link>
          
      </div>
    )
  }
}

export default NavBar
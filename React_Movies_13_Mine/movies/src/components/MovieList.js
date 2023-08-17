import React, { Component } from 'react'

// import { movies } from "../movieData"

let moviesArrForExport = []

import axios from 'axios'
export class MovieList extends Component {

  constructor() {
    console.log("constructor called!!")
    super()
    this.state = {
      hover: '',
      parr: [1],
      movies: [],
      currPage: 1,
      favourites: []
    }
  }

  async componentDidMount() {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3dd0ee46da9fd16a7a6833c6ff97105e&language=en-US&page=${this.state.currPage}`)
    console.log("Data printed after CDM")
    let moviesData = res.data;
    console.log(moviesData);


    this.setState({
      movies: [...moviesData.results]
    })
    // console.log(this.state.movies)


  }

  changeMovies = async () => {
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=3dd0ee46da9fd16a7a6833c6ff97105e&language=en-US&page=${this.state.currPage}`)
    console.log("Data printed after CDM")
    let moviesData = res.data;
    console.log(moviesData);


    this.setState({
      movies: [...moviesData.results]
    }, () => { moviesArrForExport = this.state.movies })

  }

  handleNext = () => {
    let tempArr = []

    for (let i = 1; i <= this.state.parr.length + 1; i++) {
      tempArr.push(i);
    }
    console.log(tempArr);

    this.setState({
      parr: [...tempArr],
      currPage: this.state.currPage + 1
    }, this.changeMovies)
  }

  handlePrev = () => {
    if (this.state.currPage != 1) {
      this.setState({
        currPage: this.state.currPage - 1
      }, this.changeMovies)
    }
  }

  handlePageClick = (value) => {
    if (value != this.state.currPage) {
      this.setState({
        currPage: value
      }, this.changeMovies)
    }
  }

  handleFavourites = (movieElt) => {
    let oldData = JSON.parse(localStorage.getItem('movie-app') || '[]');
    if (this.state.favourites.includes(movieElt.id)) {
      //remove the movieElt if it is already there
      // console.log(oldData);
      oldData = oldData.filter((movie) => movie.id != movieElt.id);
      // console.log(oldData);
    } else {
      //add the movieElt if it doesn't exist in the array
      oldData.push(movieElt);
    }

    localStorage.setItem('movie-app',JSON.stringify(oldData));
    //console.log(oldData);
    this.handleFavouritesState()
  }

  handleFavouritesState = () => {
    let oldData = JSON.parse(localStorage.getItem('movie-app') || '[]');
    let temp= oldData.map(movieElt=>movieElt.id)
    //console.log(temp);
    this.setState({
      favourites:[...temp]
    })
    // console.log(this.setState.favourites);
  }

  render() {
    console.log("component rendered")
    let moviesArr = this.state.movies;

    return (
      <>
        <div>
          <h3 className='text-center'><strong>Trending</strong></h3>
        </div>

        <div className='movies-list'>
          {
            moviesArr.map(movieElem => (
              <div className="card movie-card" onMouseEnter={() => { this.setState({ hover: movieElem.id }) }} onMouseLeave={() => { this.setState({ hover: '' }) }}>
                <img src={`https://image.tmdb.org/t/p/original${movieElem.backdrop_path}`} className="card-img-top movie-img" alt="..." />

                <h5 className="card-title movie-title" style={{ color: "white" }}>{movieElem.title}</h5>
                <div className='btn-wrapper' style={{ display: 'flex', justifyContent: 'center' }}>
                  {/* this works because DOM is repainted on state change. */}
                  {
                    this.state.hover == movieElem.id && <a className="btn btn-primary movies-button text-center" onClick={() => this.handleFavourites(movieElem)}>

                      {this.state.favourites.includes(movieElem.id) ? "Remove from Favourites" : "Add to Favourites"} </a>
                  }

                </div>
              </div>
            ))
          }
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item" onClick={this.handlePrev}><a class="page-link" href="#">Previous</a></li>
              {
                this.state.parr.map((value) => (
                  <li class="page-item" onClick={() => this.handlePageClick(value)}><a class="page-link" href="#">{value}</a></li>
                ))
              }
              <li class="page-item" onClick={this.handleNext}><a class="page-link" href="#" >Next</a></li>
            </ul>
          </nav></div>
      </>

    )
  }
}

export default MovieList
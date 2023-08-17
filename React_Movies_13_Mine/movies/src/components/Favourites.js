import React, { Component } from 'react'

//import { movies } from '../movieData'

import axios from 'axios'

export class Favourites extends Component {
  constructor() {
    super()
    this.state = {
      genres: [],
      currgenre: 'All Genres',
      currText: '',
      movies: [],
     
      filterArr: [],
      allgenresIds: {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Sci-Fi",
        10770: "TV",
        53: "Thriller",
        10752: "War",
        37: "Western",

      },
    }
  }

  handleListSelection = (genreToSelect) => {

    this.setState({
      currgenre: genreToSelect
    })

  }

  handleSearch = () => {

    //code for filtering based on search textbox
    let filterArray = []
    if (this.state.currText == '') {
      filterArray = this.state.movies
    }
    else {
      filterArray = this.state.movies.filter(movieElm => {
        let title = movieElm.title.toLowerCase();
        return title.includes(this.state.currText.toLowerCase().trim());
      })
      this.setState({ filterArr: filterArray })
    }

  }

  handleListSelectionFilter = (genreids) => {

    
    // code for filtering based on selection
    let filterArray = []
    this.state.movies.map(moviesElm => {
      if (this.state.currgenre == genreids[moviesElm.genre_ids[0]]) {
        filterArray.push(moviesElm)
      }
      else if (this.state.currgenre == 'All Genres') {
        filterArray.push(moviesElm)
      }
    })
    
    this.setState({ filterArr: filterArray })
    

  }

  handleWhetherSearchOrList = () => {
    let currVal = document.getElementsByClassName('searchBar').value;
    if (currVal !== undefined) {
      //console.log('I am here with'+currVal);
      this.handleSearch();
    } else {
      this.handleListSelectionFilter(this.state.allgenresIds)

    }
  }
  handleSortPopularityAsc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {

      return objA.popularity - objB.popularity;
    })

    this.setState({
      movies: [...temp]
    })
  }

  handleSortPopularityDesc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {

      return objB.popularity - objA.popularity;
    })

    this.setState({
      movies: [...temp]
    })
  }

  handleSortRatingDesc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {

      return objB.vote_average - objA.vote_average;
    })

    this.setState({
      movies: [...temp]
    })
  }

  handleSortRatingAsc = () => {
    let temp = this.state.movies;
    temp.sort(function (objA, objB) {

      return objA.vote_average - objB.vote_average;
    })

    this.setState({
      movies: [...temp]
    })
  }

  // printStmt =()=>{
  //   let arr=[1,2,3,4]
  //   console.log(" I can be called inside render!!",arr);
    
  // }


  componentDidMount() {
    let tempArr = []
    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",

    };

    tempArr.unshift('All Genres')

    let favourites_data = JSON.parse(localStorage.getItem('movie-app') || '[]');

    favourites_data.map(moviesElt => {
      if (!tempArr.includes(genreids[moviesElt.genre_ids[0]])) {
        tempArr.push(genreids[moviesElt.genre_ids[0]])
      }
    });




    this.setState({
      movies: [...favourites_data],
      genres: [...tempArr]
    },()=>{this.handleListSelectionFilter(genreids)})
    //
    
  }

  render() {
    //const moviesArr = movies.results
    //console.log(moviesArr.length);
    console.log('RENDER METHOD CALLED!!');
    const moviesArr = this.state.movies
    let tempArr = this.state.genres
    // let filterArr=[]
    //this.printStmt()

    let genreids = {
      28: "Action",
      12: "Adventure",
      16: "Animation",
      35: "Comedy",
      80: "Crime",
      99: "Documentary",
      18: "Drama",
      10751: "Family",
      14: "Fantasy",
      36: "History",
      27: "Horror",
      10402: "Music",
      9648: "Mystery",
      10749: "Romance",
      878: "Sci-Fi",
      10770: "TV",
      53: "Thriller",
      10752: "War",
      37: "Western",
    };

    //this.handleListSelectionFilter(genreids)

    // this.state.movies.map(moviesElm => {
    //   if (this.state.currgenre == genreids[moviesElm.genre_ids[0]]) {
    //     filterArr.push(moviesElm)
    //   }
    //   else if (this.state.currgenre == 'All Genres') {
    //     filterArr.push(moviesElm)
    //   }
    // })

    let count=0;
    


    return (
      <div class="main" style={{ margin: '3rem' }} >
        <div class="row" >
          <div class="col-3">
            <ul class="list-group" >
              {
                tempArr.map(genreElt => (
                  this.state.currgenre == genreElt ?
                    <li id={`${count++}`}   onClick={() => { this.handleListSelectionFilter(genreids) }} style={{ backgroundColor: 'blueviolet', color: 'white', fontWeight: 'bold' }} className="list-group-item">{genreElt}</li> :
                    
                    <li id={`${count++}`} className="list-group-item" style={{ color: 'blue' }} onMouseEnter={() => { this.handleListSelection(genreElt) }}>{genreElt} </li>
                ))

              }


            </ul>
          </div>
          <div class="col-9 favuorites-table" >
            <div className='row'>
              <input onClick={this.handleSearch} type='text' placeholder='search' className='input-group-text col'
                value={this.state.currText} onChange={(e) => {
                  this.setState({
                    currText: e.target.value
                  })

                }} />

              <input type='number' className='input-group-text col' />
            </div>
            <div className='row'>
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col"><i class="fa-solid fa-sort-up" onClick={() => {
                      this.handleSortPopularityDesc();
                      this.handleWhetherSearchOrList();

                    }}></i>Popularity <i class="fa-solid fa-sort-down" onClick={() => {
                      this.handleSortPopularityAsc()
                      this.handleWhetherSearchOrList();
                    }}></i></th>
                    <th scope="col"><i class="fa-solid fa-sort-up" onClick={() => { this.handleSortRatingDesc(); this.handleWhetherSearchOrList(); }}></i>Ratings <i class="fa-solid fa-sort-down" onClick={() => { this.handleSortRatingAsc(); this.handleWhetherSearchOrList(); }}></i></th>

                    <th scope="col">Delete from List</th>
                  </tr>
                </thead>
                <tbody>



                  {
                    this.state.filterArr.map((movieElem) => (
                      <tr>
                        <td><img src={`https://image.tmdb.org/t/p/original/${movieElem.backdrop_path}`} className="card-img-top table-img" alt="..." />
                        </td>
                        <th scope="row">{movieElem.title}</th>

                        <td>{genreids[movieElem.genre_ids[0]]}</td>
                        <td>{movieElem.popularity}</td>
                        <td>{movieElem.vote_average}</td>
                        <td><button type="button" class="btn btn-danger">Danger</button></td>
                      </tr>
                    ))

                  }



                </tbody>
              </table>
            </div>
            <div className='row'>
              <nav aria-label="Page navigation example">
                <ul class="pagination">
                  <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
              </nav>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Favourites
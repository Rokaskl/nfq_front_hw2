import React from "react";
import Card from "./Card";
import axios from "axios";
import { endpoints, getImageUrl } from "../config";
class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      filteredMovies: [],
      genres: [],
      isLoading: true,
      selected: ""
    };
  }

  genreClick = event => {
    const genre = event.target.value.split(" ");
    console.log(genre);
    this.setState({
      selected: genre[1],
      filteredMovies: this.state.movies.filter(movie =>
        movie.genre_ids.includes(parseInt(genre[0]))
      )
    });
    console.log(this.state.filteredMovies);
  };
  componentDidMount() {
    axios.get(endpoints.mostPopularMovies()).then(_movies => {
      axios.get(endpoints.genres()).then(_genres => {
        this.setState({
          movies: _movies.data.results,
          filteredMovies: _movies.data.results,
          genres: _genres.data.genres,
          isLoading: false
        });
      });
    });
  }

  render() {
    if (!this.state.isLoading) {
      return (
        <div>
          <div className="nav-bar">
            <ul className="genresList">
              {this.state.genres.map(genre => (
                <li key={genre.id}>
                  <button
                    value={genre.id + " " + genre.name}
                    onClick={this.genreClick}
                    className="genreBtn"
                  >
                    {genre.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <h1>{this.state.selected}</h1>
          {this.state.filteredMovies.map(card => (
            <Card
              key={card.id}
              title={card.original_title}
              backgroundImage={getImageUrl(card.backdrop_path)}
              data={card.release_date}
              voteAverage={card.vote_average}
              voteCount={card.vote_count}
              description={card.overview}
            />
          ))}
        </div>
      );
    } else {
      return <h1>LOADING!!!</h1>;
    }
  }
}

export default App;

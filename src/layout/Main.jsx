import React from 'react';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

class Main extends React.Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    fetch('http://www.omdbapi.com/?apikey=fec1a62a&s=matrix')
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  }

  // функция по обновлен state и спущенная вниз
  searchMovies = (str, type = 'all') => {
    fetch(`http://www.omdbapi.com/?apikey=fec1a62a&s=${str}${type !== 'all' ? `&type=${type}` : ''}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search }));
  };

  render() {
    const { movies } = this.state;

    return (
      <main className='container content'>
        <Search searchMovies={this.searchMovies} />
        {movies.length ? <Movies movies={this.state.movies} /> : <Preloader />}
      </main>
    );
  }
}

export default Main;

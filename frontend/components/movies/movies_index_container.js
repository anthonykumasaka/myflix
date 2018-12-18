import {connect} from 'react-redux'; 
import MoviesIndex from './movies_index'; 
import {fetchMovies} from '../../actions/movie_actions'; 
import {logout} from '../../actions/session_actions';
import {genreSelector} from '../../reducers/selectors'; 

const msp = (state) => {
  let movies = Object.values(state.entities.movies); 
  return {
    movies: movies,

  }; 
}; 

const mdp = (dispatch) => {
  return {
    logout: () => dispatch(logout()), 
    fetchMovies: () => dispatch(fetchMovies())
  };
};

export default connect(msp, mdp)(MoviesIndex); 
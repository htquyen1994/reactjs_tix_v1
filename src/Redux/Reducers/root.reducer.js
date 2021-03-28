import { combineReducers } from 'redux';
import movieReducer from './movie.reducer';
import firebaseReducer from './firebase.reducer';
import searchMovieBookingReducer from './search-movie-booking.reducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    firebase: firebaseReducer,
    searchBooking: searchMovieBookingReducer
})

export default rootReducer;
import { combineReducers } from 'redux';
import movieReducer from './movie.reducer';
import firebaseReducer from './firebase.reducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    firebase: firebaseReducer,
})

export default rootReducer;
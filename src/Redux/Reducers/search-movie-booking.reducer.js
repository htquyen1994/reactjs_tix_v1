import { SEARCH_BOOKING_MOVIE_SUCCESS, 
        SEARCH_BOOKING_SET_MOVIE_SELECTED } from "../Constants/search-booking.constant"

const initState = {
    movieList: [],
    movieSearch: {
        maPhim: null,
        tenPhim: ''
    },

    cumRapList: [],
    cumRapSearch: {
        maCumRap: ''
    },

    lichChieuList: []
}

const searchBookingReducer = (state=initState, {type, payload}) => {
    switch(type) {
        case SEARCH_BOOKING_MOVIE_SUCCESS:
            return {...state, movieList: payload};

        case SEARCH_BOOKING_SET_MOVIE_SELECTED:
            const findIndex = state.movieList.findIndex(item => item.maPhim === payload);
            const movie = {  maPhim: payload, tenPhim: ''}
            if (findIndex !== -1) {
                movie.tenPhim = state.movieList[findIndex].tenPhim;
            }
            return {...state, movieSearch: movie};
        default:
            return {...state}
    }
}

export default searchBookingReducer;
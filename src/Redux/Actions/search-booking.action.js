import { SEARCH_BOOKING_MOVIE_SUCCESS, 
    SEARCH_BOOKING_MOVIE_FAILED, 
    SEARCH_BOOKING_THREATER_BY_MOVIE_SUCCESS, 
    SEARCH_BOOKING_THREATER_BY_MOVIE_FAILED,
    SEARCH_BOOKING_SET_MOVIE_SELECTED } from "../Constants/search-booking.constant"
import { getAxiosData } from "../axios.instance"

export const SearchMovieListSuccess = (movieList) => {
    return {
        type: SEARCH_BOOKING_MOVIE_SUCCESS,
        payload: movieList
    }
}

export const SearchThreaterListByMovieSuccess = (threaterList) => {
    return {
        type: SEARCH_BOOKING_THREATER_BY_MOVIE_SUCCESS,
        payload: threaterList
    }
}

export const SeachMovieListFailed = (message) => {
    return {
        type: SEARCH_BOOKING_MOVIE_FAILED,
        payload: message
    }
}

export const SearchThreaterListByMovieFailed = (message) => {
    return {
        type: SEARCH_BOOKING_THREATER_BY_MOVIE_FAILED,
        payload: message
    }
}

export const SearchMovieListAPI = () => {
    return (dispatch) => {
        getAxiosData('QuanLyPhim/LayDanhSachPhim?maNhom=GP01')
        .then(res => {
            dispatch(SearchMovieListSuccess(res.data));
        })
        .catch(err => {
            dispatch(SeachMovieListFailed(err));
        });
    }
}

export const SearchThreaterByMovie = (maPhim) => {
    const query = `LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return (dispatch) => {
        getAxiosData(query)
        .then(res => {
            dispatch()
        })
        .catch(err => {

        })
    }
}


export const SetMovieBooking = (maPhim) => {
    return {
        type: SEARCH_BOOKING_SET_MOVIE_SELECTED,
        payload: maPhim
    }
}
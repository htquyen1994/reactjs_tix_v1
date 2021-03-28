import React, { Component } from 'react';
import styles from './styles.module.css';
import { connect } from 'react-redux';
import { SearchMovieListAPI, 
        SearchThreaterByMovie, 
        SetMovieBooking } from '../../Redux/Actions/search-booking.action';
import DropDownSearch from '../DropDownSearch';

class SearchBookingMovie extends Component {

    constructor(props) {
        super(props);
      }

    handlChaneSearchMovie = (event) => {
        const maPhim = event.target.value;
        console.log('MaPhim', maPhim);
        this.props.setMovieBooking(maPhim);
        console.log('Movie Select', this.props.movieSelect)

    }
    render() {
        const movieSelect = this.props.movieSelect;
        const movieDisplay = {
            value: movieSelect.maPhim,
            name: movieSelect.tenPhim
        };
        const movieList = this.props.movieList.map((item) => {
            return {value: item.maPhim, name: item.tenPhim}
        })

        return (
            
            <div className={`container ${styles['wrapper-content']}`}>
                
                <div className="row" style={{width: '100%'}}>
                    <div className="col-3">
                        <DropDownSearch 
                            placeHolder='Phim' 
                            data={movieList}
                            movieSelect = {movieDisplay}
                            handleChange = {this.handlChaneSearchMovie}
                            />
                    </div>
                    <div className="col-3">
                        <DropDownSearch 
                                placeHolder='Phim' 
                                data={movieList}
                                movieSelect = {movieDisplay}
                                handleChange = {this.handlChaneSearchMovie}
                                />
                    </div>
                    <div className="col-3">
                        <DropDownSearch 
                                placeHolder='Phim' 
                                data={movieList}
                                movieSelect = {movieDisplay}
                                handleChange = {this.handlChaneSearchMovie}
                                />
                    </div>
                    <div className="col-3">
                        <DropDownSearch 
                                placeHolder='Phim' 
                                data={movieList}
                                movieSelect = {movieDisplay}
                                handleChange = {this.handlChaneSearchMovie}
                                />
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.getMovieList();
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getMovieList: () => {
            dispatch(SearchMovieListAPI());
        },

        getCumRapByMovie: (maPhim) => {
            dispatch(SearchThreaterByMovie(maPhim));
        },

        setMovieBooking: (maPhim) => {
            dispatch(SetMovieBooking(maPhim));
        }
    }
}

const mapStateToProps = (state) => {
    return {
        movieList: state.searchBooking.movieList,
        movieSelect: state.searchBooking.movieSearch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBookingMovie);
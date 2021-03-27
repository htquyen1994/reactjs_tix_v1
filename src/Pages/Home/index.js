import React, { Component } from 'react'
import Carousel from '../../Components/Carousel'
import SearchBookingMovie from '../../Components/SearchBookingMovie';

export default class Home extends Component {
    render() {
        return (
            <>
                <Carousel/>
                <SearchBookingMovie/>
            </>
        )
    }
}

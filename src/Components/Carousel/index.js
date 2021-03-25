import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import introduceMovieList from '../../ServerFake/IntroduceMovie.json';
import {SliderArrowNext, SliderArrowPrev} from '../SliderArrow/index.js';
import styles from './styles.module.css';


export default class Carousel extends Component {

    renderSlideItems = () => {
        return introduceMovieList.map((slide, index) => {
            const stylesImage = {
                backgroundImage: 'url(' + slide.hinhAnh + ')',
                display: 'flex !important',
                alignItems: 'center',
                width: '100%',
                justifyContent: 'center',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: '600px',       
            }
            return (
            <div  className={styles['wrapper']} style={{backgroundImage: `url(${slide.hinhAnh})`}} key={index}>
                {/* <i className={`fas fa-play ${styles['play-movie']}`} ></i> */}
                <p className={styles['play-movie']}>{index}</p>
                {/* <img  src={slide.hinhAnh}></img> */}
            </div>
            );
        })
    }

    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SliderArrowNext />,
            prevArrow: <SliderArrowPrev />
        };
        return (
            <div >
                <Slider {...settings}>
                    {this.renderSlideItems()}
                </Slider>
            </div>
        );
    }
}

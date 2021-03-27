import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import introduceMovieList from '../../ServerFake/IntroduceMovie.json';
import {SliderArrowNext, SliderArrowPrev} from '../SliderArrow/index.js';
import styles from './styles.module.css';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import TrailerYoutube from '../TrailerYoutube/index.js';



export default class Carousel extends Component {
   
    state = {
        trailer: {
            opendVideo: false,
            VideoID: null,
        }
    }

    setPlayDemo = (videoId) => {
        this.setState({
            trailer: {
                opendVideo: true,
                VideoID: videoId,
            }
        }, () => {
            console.log('Set state success', this.state)
        })
    }

    setClosedVideo = () => {
        this.setState({
            trailer: {
                opendVideo: false,
                VideoID: null,
            }
        })
    }

    renderSlideItems = () => {
        return introduceMovieList.map((slide, index) => {
            return (
            <div style={{ color: "green"}} className={styles['wrapper']} key={index} >
                <i className={`fas fa-play ${styles['play-movie']}`} onClick={()=> {
                  this.setPlayDemo(slide.video)
                }}></i>
                <img  src={slide.hinhAnh}></img>
            </div>
            );
        })
    }

    render() {
        const settings = {
            dots: false,
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
                <TrailerYoutube
                    closedVideo = {this.setClosedVideo}
                    trailer = {this.state.trailer}/>
            </div>
        );
    }
}

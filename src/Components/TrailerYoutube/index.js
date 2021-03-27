import React, { Component } from 'react'
import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';

export default class TrailerYoutube extends Component {
    trailer = this.props.trailer;
    closedVideo = this.props.closedVideo;
    constructor(props) {
        super(props);
    }

    render() {
        console.log('Render', this.props)
        return (
            <div>
                <div>
                    <ModalVideo channel='youtube' 
                        isOpen={this.props.trailer.opendVideo }
                        videoId={this.props.trailer.VideoID} 
                        // videoId= 'Ncwkodt5dA4'
                        onClose={() => this.closedVideo()} />
                </div>
            </div>
        )
    }
}

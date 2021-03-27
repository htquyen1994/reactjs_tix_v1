import React, { Component } from 'react';
import styles from './styles.module.css';

export default class SearchBookingMovie extends Component {
    render() {
        return (
            // <div className={`container ${styles['wrapper-content']}`} >
            //     1234
            // </div>
            <div className={`container ${styles['wrapper-content']}`}>
                <div className="row" style={{width: '100%'}}>
                    <div className={`col ${styles['item-search']}`}>
                        123
                    </div>
                    <div className={`col ${styles['item-search']}`}>
                        123
                    </div>
                    <div className={`col ${styles['item-search']}`}>
                        123
                    </div>
                    <div className={`col ${styles['item-search']}`}>
                        123
                    </div>
                </div>
            </div>
        )
    }
}

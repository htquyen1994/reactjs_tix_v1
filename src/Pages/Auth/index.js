import React, { Component } from 'react';
import classes from './style.module.css';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux';
import { signInFacebook } from '../../Redux/Actions/firebase.action';


class Auth extends Component {
    render() {
        return (
            <div className={`${classes['bg-Login']}`}>
                <div className={`${classes['container-login']}`}>
                    <div className={`col-3 ${classes['login-form']}`}>
                        <NavLink to="/">
                            <IconButton color="secondary" aria-label="add an alarm" className={`${classes['close-button']}`}>
                                <CloseIcon />
                            </IconButton>
                        </NavLink>
                        

                        <div className={`${classes['content']}`}>
                             <img className={`${classes['logo']}`} src='./images/group2x.png'></img>
                            <div className={`${classes['sign-message']}`}>
                                Đăng nhập để được nhiều ưu đãi, mua vé và bảo mật thông tin!
                            </div>
                            <img className={`${classes['fb']}`} src='./images/btn-FB.png'
                                onClick = {() => {
                                    this.props.signInFaceBook();
                                }}    
                            ></img>
                            
                            <img className={`${classes['zalo']}`} src='./images/btn-Zalo.png'></img>
                            <img className={`${classes['google']}`} src='./images/btn-Google.png'></img>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signInFaceBook: () => {
            dispatch(signInFacebook())
        }
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Auth)

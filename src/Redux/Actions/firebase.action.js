import { auth, firebase, AUTHENTICATION_STATUS } from '../../Core/auth-service';
import { AUTH_FACEBOOK_LOGIN_SUCCESS, 
    AUTH_GOOGLE_LOGIN_SUCCESS, 
    AUTH_LOGOUT_SUCCESS,
    FETCH_CURRENT_USER } from '../Constants/firebase.constant';

export const loginFaceBookSuccess = () => {
    console.log('Login success', auth.currentUser.toJSON());
    return {
        type: AUTH_FACEBOOK_LOGIN_SUCCESS,
        payload: auth.currentUser.toJSON()
    }
}

export const loginGoogleSuccess = () => {
    return {
        type: AUTH_GOOGLE_LOGIN_SUCCESS,
        payload: auth.currentUser.toJSON()
    }
}

export const logoutSuccess = () => {
    return {
        type: AUTH_LOGOUT_SUCCESS,
        payload: auth.currentUser.toJSON()
    }
}

export const fetchUser = (user) => {
    return {
        type: FETCH_CURRENT_USER,
        payload: user
    }
}

export const signInFacebook = () => async (dispatch) => {
    try {
        await auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
        window.
        console.log('Authentication', auth.currentUser);
        console.log('Authentication uid', auth.currentUser.uid);
       
        dispatch(loginFaceBookSuccess());
    } catch (error) {
        throw error;
    }
}

export const signInGoogle = () => async (dispatch) => {
    try {
        await auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
        dispatch(loginGoogleSuccess());
    } catch (error) {
        throw error;
    }
}

export const signOut = () => async (dispatch) => {
    try {
        await auth.signOut();
        dispatch(logoutSuccess());
    } catch (error) {
        throw error;
    }
}

export const fetchFirebaseCurrentUser = () => async (dispatch) => {
    try {
        await auth.onAuthStateChanged((user) => {
            if (user) {
                console.log('Exist user', user);
                localStorage.setItem(AUTHENTICATION_STATUS, true);
                dispatch(fetchUser(user));
            } else {
                console.log('Not Exist user', user);
                localStorage.removeItem(AUTHENTICATION_STATUS);
                dispatch(fetchUser(null));
            }
        });
    } catch (error) {
        throw error;
    }
}
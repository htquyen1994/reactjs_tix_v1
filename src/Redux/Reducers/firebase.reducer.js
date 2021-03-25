import { AUTH_FACEBOOK_LOGIN_SUCCESS, FETCH_CURRENT_USER } from "../Constants/firebase.constant"

const initialState = {
    user: null
}

const firebaseReducer = (state=initialState, {type, payload}) => {
    switch(type) {
        case FETCH_CURRENT_USER:
            return { ...state, user: payload };
        case AUTH_FACEBOOK_LOGIN_SUCCESS:
            return { ...state, user: payload };
        default:
            return {...state};
    }
}

export default firebaseReducer;
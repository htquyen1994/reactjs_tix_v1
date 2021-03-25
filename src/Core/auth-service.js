import React, { useState, useEffect, useContext, createContext } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../Config/firebase.config";

const AUTHENTICATION_STATUS = 'IsAuthenticationStatus';

firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()

const getAuthenticationStatus = () => {
    return localStorage.getItem(AUTHENTICATION_STATUS);
}

export {auth, getAuthenticationStatus, firebase, AUTHENTICATION_STATUS };
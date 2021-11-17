import {
    TOGGLE_LOADER,
    SET_USER,
    USER_LOGOUT,
    HIDE_LOADER,
    SET_THEME,
    SET_LANGUAGE,

  } from './actionTypes';


//Loader açar  
export function toggleLoader(){
    return {
        type: TOGGLE_LOADER,
    }
}

//Loader kapatır.
export function hideLoader(){
    return {
        type: HIDE_LOADER,
    }
}

//Sistemin temasını set eder.
export function setTheme(payload){
    return {
        type: SET_THEME,payload 
    }
}

//Sistemin dilini set eder.
export function setLanguage(payload){
    return {
        type: SET_LANGUAGE,payload 
    }
}

export function setUser(payload){
    return {
        type:SET_USER,payload
    }
}

export function userLogout(payload){
    return {
        type:USER_LOGOUT,payload
    }
}
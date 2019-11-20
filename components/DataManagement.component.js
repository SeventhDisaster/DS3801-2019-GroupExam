/*

This file handles log-in and user-userSessios by utilizing localstorage as a way to "remember" what user is logged in.


============== USEFUL METHODS ===============
* In order to check and authenticate a user, import the "confirmLogin" method and call it as a mounted method.
* In order to upate something in the data-table (users) call "updateUsersData" method after pushing to the dataset array.


*/

import * as data from './Index.js';
import { router } from '../router.js';

//Used to load in all userSessio data
function loadUserSessionData() {
    if(!getStorage("userSession")) {
        setStorage("userSession", data.users);
    } else {
        data.setUsers(getStorage("userSession"));
    }
}

function loadAppointmentSessionData() {
    if(!getStorage("appointmentSession")) {
        setStorage("appointmentSession", data.appointments);
    } else {
        data.setAppointments(getStorage("appointmentSession"));
    }
}
function loadSessionData() {
    loadUserSessionData();
    loadAppointmentSessionData();
}



function confirmLogin() {
    let user = getStorage("userSession");
    if(!user){
        redirectTo('/login');
        console.log("No active userSession: Redirected to login!")
    }
}

//Super unsecure, but it's for demonstration purposes
function login(email, password) {
    if(email && password) {
        for(let user of data.users){
            //User is logged in with email and password
            if(email === user.email && password === user.password){
                setStorage("userSession", user);
                redirectToRelevantSite(user);
                return true;
            }
        }
    }
    return false;
}

//Redirects user to either employee or client area
function redirectToRelevantSite(user){
    if(user.isEmployed){
        redirectTo('/ansatt');
    } else {
        redirectTo('/brukerside');
    }
}

function logout() {
    localStorage.removeItem("userSession");
    router.push("/");
}

function updateUsersData() {
    setStorage("users", data)
}

function getCurrentUser() {
    return getStorage("userSession");
}

function getAppointments() {
    return getStorage("appointmentSession");
}

//Saves data to localstorage (Similar to Java hashmaps)
function setStorage(key, value) {
    if(typeof value !== "string") {
        value = JSON.stringify(value);
    }

    localStorage.setItem(key, value);

    return value;
}

//Retrieves data saved in localstorage (Similar to Java hashmaps)
function getStorage(key) {
    let object = localStorage.getItem(key);
    return JSON.parse(object);
}

function redirectTo(routerLink) {
    router.push(routerLink);
}


// Cleans the localstorage (resets changes and logs out)
function clearStorage() {
    localStorage.clear();
}


export {loadSessionData, login, logout, clearStorage, updateUsersData, confirmLogin, getCurrentUser, getAppointments}
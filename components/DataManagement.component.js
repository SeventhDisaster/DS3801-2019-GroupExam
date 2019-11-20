/*

This file handles log-in and user-userSessios by utilizing localstorage as a way to "remember" what user is logged in.


============== USEFUL METHODS ===============
* In order to check and authenticate a user, import the "confirmLogin" method and call it as a mounted method.
* In order to upate something in the data-table (users) call "updateUsersData" method after pushing to the dataset array.


*/

import * as data from './Index.js';
import { router } from '../router.js';
import { appointments } from './DataSet.component.js';

//Used to load in all userSessio data
function loadUsersData() {
    if(!getStorage("users")) {
        setStorage("users", data.users);
    } else {
        data.setUsers(getStorage("users"));
    }
}

function loadAppointmentsData() {
    if(!getStorage("appointments")) {
        setStorage("appointments", data.appointments);
    } else {
        data.setAppointments(getStorage("appointments"));
    }
}

function loadData() {
    loadUsersData();
    loadAppointmentsData();
}

loadData();

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
                if(localStorage.getItem("holdingAppointment")){
                    let newAppointment = JSON.parse(localStorage.getItem("holdingAppointment"));
                    user.appointmentIds.push(newAppointment.id);
                    data.appointments.push(newAppointment);
                    updateAppointmentsData()
                    localStorage.removeItem("holdingAppointment");
                }
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
    setStorage("users", data.users)
}

function updateAppointmentsData() {
    setStorage("appointments", data.appointments)
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


export {loadData, login, logout, clearStorage, updateUsersData, updateAppointmentsData, confirmLogin, getCurrentUser, getAppointments}
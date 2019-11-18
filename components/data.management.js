/*

This file handles log-in and user-sessions by
utilizing localstorage as a way to "remember"
what user is logged in.

*/

import * as userData from './dataset.js';
import { router } from '../router.js';

if(!getStorage("users")) {
    setStorage("users", userData.users);
} else {
    userData.setUsers(getStorage("users"));
}

let user = userData.users[getStorage("session")-1]

function confirmLogin() {
    if(!user){
        //redirectTo('/login');
        console.log("Tried to redirect")
    }
}

//Super unsecure, but it's for demonstration purposes
function login(email, password) {
    if(email && password) {
        for(let user of userData.users){
            if(email === user.email && password === user.password){
                setStorage("session", user);
                if(user.isEmployed){
                    redirectTo('/ansatt');
                } else {
                    redirectTo('/brukerside');
                }
                return true;
            }
        }
    }
    return false;
}

function logout() {
    localStorage.removeItem("session");
    router.push("/");
}

function updateUsersData() {
    setStorage("users", users)
}

//Unsecure way to checking username/password
function getUser(name, password) {
    for(user of users){
        if(user.name === name && user.password === password) {
            return user;
        }
    }
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

    //Checks if the object starts with bracket or number
    if(/^(\{|\}|\[|\]|[0-9])/.test(object)) {
        return JSON.parse(object)
    }

    return object;
}

function redirectTo(routerLink) {
    router.push(routerLink);
}


// Cleans the localstorage (resets changes and logs out)
function clearStorage() {
    localStorage.clear();
}

export {login, logout, clearStorage, getUser, updateUsersData, confirmLogin}
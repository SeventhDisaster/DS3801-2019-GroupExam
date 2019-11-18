import {login} from './data.management.js';

export default Vue.component('user-login-form',{
    template: ` 
    <div id="login">
        <form>
            <h1>Login:</h1>
            <p>{{info}}</p>
            <input type="text" name="email" v-model="email" placeholder="E-post Adresse"></input>
            <input type="password" name="password" v-model="password" placeholder="Passord"></input>
            <button type="button" v-on:click="loginWith()">Login</button>
        </form>

        <div>
            <p>Eksempel Bruker: bruker@epost.no - Test123</p>
            <p>Eksempel Ansatt 1: ansatt1@clinic.no - Osteopro666</p>
            <p>Eksempel Ansatt 2: ansatt2@clinic.no - ProStabber1337</p>
        </div>

    </div>`,
    data: function() {
        return {
            email: "",
            password: "",
            info: ""
        }
    },
    methods:{
        loginWith(){
            console.log("Attempted login with: " + this.email + " - " + this.password)
            if(login(this.email, this.password)){
                this.info = "Logged in!"
            } else {
                this.info = "Invalid login details";
            }
        }
    }
});



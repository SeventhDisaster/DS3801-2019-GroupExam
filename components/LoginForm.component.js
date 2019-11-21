import {login} from './Index.js';

export default Vue.component('user-login-form',{
    template: `
    <div class="content-box">

        <div id="group section row">
            <div class="col span_1_of_3"></div>
            <div class="col span_1_of_3">
                <form>
                    <h1 class="">Login:</h1>
                    <p>{{info}}</p>
                    <input type="text" class="input-form" name="email" v-model="email" placeholder="E-post Adresse"></input>
                    <input type="password" class="input-form" name="password" v-model="password" placeholder="Passord"></input>
                    <button type="button" class="button button-light button-login" v-on:click="loginWith()">Logg inn</button>
                </form>
                <div class="col span_1_of_3"></div>
        </div>

        <div class="group section row">
            <div class="col span_1_of_4"></div>
            <div class="col span_2_of_4">
                <p>Eksempel Bruker: bruker@epost.no - Test123</p>
                <p>Eksempel Ansatt 1: ansatt1@clinic.no - Osteopop</p>
                <p>Eksempel Ansatt 2: ansatt2@clinic.no - ProStabber1337</p>
                <p>Eksempel Ansatt 2: ansatt3@clinic.no - FastFud4Life</p>
                <p>Eksempel Ansatt 2: ansatt4@clinic.no - 123456</p>
            </div>
            <div class="col span_1_of_4"></div>
        </div>

            <div id="group section row">
            <div class="col span_1_of_3"></div>
            <div class="col span_1_of_3"></div>
            <div class="col span_1_of_3"></div>

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
        loginWith() {
            console.log("Attempted login with: " + this.email + " - " + this.password)
            if (!login(this.email, this.password)) {
                this.info = "Feil Passord eller Brukernavn!";
            }
        }
    }
});



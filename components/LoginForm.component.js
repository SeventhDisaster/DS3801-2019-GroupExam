import {login} from './Index.js';

export default Vue.component('user-login-form',{
    template: ` 
    <div id="row">
        <div class="col">
            <form>
                <h1 class="">Login:</h1>
                <p>{{info}}</p>
                <input type="text" name="email" v-model="email" placeholder="E-post Adresse"></input>
                <input type="password" name="password" v-model="password" placeholder="Passord"></input>
                <button type="button" v-on:click="loginWith()">Logg inn</button>
            </form>

            <div>
                <p>Eksempel Bruker: bruker@epost.no - Test123</p>
                <p>Eksempel Ansatt 1: ansatt1@clinic.no - Osteopop</p>
                <p>Eksempel Ansatt 2: ansatt2@clinic.no - ProStabber1337</p>
                <p>Eksempel Ansatt 2: ansatt3@clinic.no - FastFud4Life</p>
                <p>Eksempel Ansatt 2: ansatt4@clinic.no - 123456</p>
            </div>
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



import {login} from './Index.js';

export default Vue.component('user-login-form',{
    template: `
    <div>
        <form class="signup-form">
                    <h2>Logg inn:</h2>
                    <p>{{info}}</p>
                    <input class="signup-input cursor" type="text"  name="email" v-model="email" placeholder="E-post adresse"/>
                    <input class="signup-input cursor" type="password"  name="password" v-model="password" placeholder="Passord" @keyup.enter="loginWith()"/>
                    <button type="button" class="login-btn" v-on:click="loginWith()">Logg inn</button>
        </form>
    </div>`,
    data: function() {
        return {
            email: "",
            password: "",
            info: ""
        }
    },
    mounted() {
        if (localStorage.getItem("holdingAppointment")) {
            this.info = "Du må være pålogget for å bestille en time";
        }
    },
    methods:{
        loginWith() {
            console.log("Attempted login with: " + this.email + " - " + this.password)
            if (!login(this.email, this.password)) {
                this.info = "Feil passord eller brukernavn!";
            }
        }
    }
});



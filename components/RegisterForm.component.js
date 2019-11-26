import {User, users, login, updateAll} from './Index.js';

export default Vue.component('user-register-form',{
    template: ` 
    <div>
        <form class="signup-form">
            <h2>Register Deg:</h2>
            <p>{{info}}</p>
            <input class="signup-input" type="text" name="name" v-model="name" placeholder="Fullt navn*">
            <input class="signup-input" type="text" name="email" v-model="email" placeholder="E-post adresse*">
            <input class="signup-input" type="text" name="phone" v-model="phone" placeholder="+47 987 65 432*">
            <input class="signup-input" type="password" name="password1" v-model="password1" placeholder="Passord*">
            <input class="signup-input" type="password" name="password2" v-model="password2" placeholder="Passord*">
            <button class="signup-btn" type="button" v-on:click="register()">Registrer</button>
        </form>
    </div>`,
    data: function() {
        return {
            email: "",
            password1: "",
            password2: "",
            name: "",
            phone: "",
            info: "Registrer deg i klinikkens system!"
        }
    },
    methods:{
        register(){
            console.log(`Trying to register user: ${this.email}, ${this.password1}, ${this.name}, ${this.phone}`);
            let isOpenEmail = true; //Check if email is already registered or not
            if(this.email && this.password1 && this.password2 && this.name){
                //Check the make sure the E-mail is not already in use
                for (let user of users) {
                    if (this.email == user.email) {
                        isOpenEmail = false;
                    }
                }
                if (isOpenEmail) {
                    //Check to make sure passwords match
                    if (this.password1 === this.password2) {
                        let newUser = new User(
                            this.name, 
                            this.password1, 
                            this.phone ? this.phone : "", 
                            this.email);
                        users.push(newUser);
                        updateAll();
                        login(this.email, this.password1);
                    } else {
                        this.info = "Passordene du skrev in matcher ikke!"
                    }
                } else {
                    this.info = "Denne e-postadressen er allerede registrert!"
                }
            }
        }
    }
});
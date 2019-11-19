import {User, users, login, updateUsersData} from './index.js';

export default Vue.component('user-register-form',{
    template: ` 
    <div>
        <form>
            <h1>Register Deg:</h1>
            <p>{{info}}</p>
            <p>Fullt Navn: *</p><input type="text" name="name" v-model="name" placeholder="Fullt Navn"></input>
            <p>E-Post: *</p><input type="text" name="email" v-model="email" placeholder="E-post Adresse"></input>
            <p>Mobil:</p><input type="text" name="phone" v-model="phone" placeholder="+47 987 65 432"></input>
            <p>Passord: *</p><input type="password" name="password1" v-model="password1" placeholder="Passord"></input>
            <p>Gjenta Passord: *</p><input type="password" name="password2" v-model="password2" placeholder="Passord"></input>
            <button type="button" v-on:click="register()">Registrer</button>
        </form>
    </div>`,
    data: function() {
        return {
            email: "",
            password1: "",
            password2: "",
            name: "",
            phone: "",
            info: "Registerer deg i klinikkens system!"
        }
    },
    methods:{
        register(){
            console.log(`Trying to register user: ${this.email}, ${this.password1}, ${this.name}, ${this.phone}`);
            let isOpenEmail = true; //Check if email is already registered or not
            if(this.email && this.password1 && this.password2 && this.name){
                //Check the make sure the E-mail is not already in use
                for(let user of users){
                    if(this.email == user.email){
                        isOpenEmail = false;
                    }
                }
                if(isOpenEmail){
                    //Check to make sure passwords match
                    if(this.password1 === this.password2){
                        let newUser = new User(
                            this.name, 
                            this.password1, 
                            this.phone ? this.phone : "", 
                            this.email);
                        users.push(newUser);
                        updateUsersData();
                        console.log(users);
                        login(this.email, this.password1);
                    } else {
                        this.info = "Passordene du skrev in matcher ikke!"
                    }
                } else {
                    this.info = "Denne E-Posten er allerede registert!"
                }
            }
        }
    }
});
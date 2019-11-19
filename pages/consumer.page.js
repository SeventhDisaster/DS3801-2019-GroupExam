import {confirmLogin, logout} from '../components/index.js'

const ConsumerPage = {
    template: `
        <div>
            <h1>{{title}}</h1>
            <button v-on:click="loggut()">Logg Ut</button>
        </div>`,
    data() {
        return {
            title: "Velkommen til brukersiden"
        }
    },
    mounted() {
        confirmLogin(); //Makes sure the user is logged in in order to access this site.
    },
    methods: {
        loggut(){
            logout();
        }
    }
}

export default ConsumerPage;
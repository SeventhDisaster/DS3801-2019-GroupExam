import {confirmLogin, logout} from '../components/Index.js';

const EmployeePage = {
    template: `
        <div class="flex-container">
            <h1>{{title}}</h1>
            <button class="button button-dark" v-on:click="loggut()">Logg Ut</button>
        </div>`,
    data() {
        return {
            title: "Velkommen til Ansattportalen"
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

export default EmployeePage;
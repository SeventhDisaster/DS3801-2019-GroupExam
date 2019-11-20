import {confirmLogin, logout} from '../components/Index.js';

const EmployeePage = {
    template: `
        <div>
            <div class="group section row">
                <div class="col span_1_of_3 centered"></div>
                        <h1 class="col span_1_of_3 centered">{{title}}</h1>
                        <div class="col span_1_of_3 centered"></div>
                </div>

                <div class="group section row">
                    <div class="col span_1_of_3"></div>
                        <button class="button button-light centered col span_1_of_3" v-on:click="loggut()">Logg Ut</button>
                        <div class="col span_1_of_3"></div>
                </div>

                <div class="group section row">
                    <div class="col span_1_of_3"></div>
                </div>
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
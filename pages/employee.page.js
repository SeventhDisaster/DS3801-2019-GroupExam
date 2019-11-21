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
                <div class="col span_1_of_3 centered"></div>
                        <h2 class="col span_1_of_3 centered">Dager</h2>
                        <div class="col span_1_of_3 centered"></div>
                </div>

                <div class="group section row">
                    <div class="col span_1_of_5 centered">Mandag
                    <button class="button-light centered bookings-employee">08.00</button>
                    <button class="button-light centered bookings-employee">09.00</button>
                    <button class="button-light centered bookings-employee">10.00</button>
                    <button class="button-light centered bookings-employee">11.00</button>
                    <button class="button-light centered bookings-employee">12.00</button>
                    <button class="button-light centered bookings-employee">13.00</button>
                    <button class="button-light centered bookings-employee">14.00</button>
                    <button class="button-light centered bookings-employee">15.00</button>
                    </div>

                    <div class="col span_1_of_5 centered">Tirsdag
                    <button class="button-light centered bookings-employee">08.00</button>
                    <button class="button-light centered bookings-employee">09.00</button>
                    <button class="button-light centered bookings-employee">10.00</button>
                    <button class="button-light centered bookings-employee">11.00</button>
                    <button class="button-light centered bookings-employee">12.00</button>
                    <button class="button-light centered bookings-employee">13.00</button>
                    <button class="button-light centered bookings-employee">14.00</button>
                    <button class="button-light centered bookings-employee">15.00</button>
                    </div>


                    <div class="col span_1_of_5 centered">Onsdag
                    <button class="button-light centered bookings-employee">08.00</button>
                    <button class="button-light centered bookings-employee">09.00</button>
                    <button class="button-light centered bookings-employee">10.00</button>
                    <button class="button-light centered bookings-employee">11.00</button>
                    <button class="button-light centered bookings-employee">12.00</button>
                    <button class="button-light centered bookings-employee">13.00</button>
                    <button class="button-light centered bookings-employee">14.00</button>
                    <button class="button-light centered bookings-employee">15.00</button>
                    </div>


                    <div class="col span_1_of_5 centered">Torsdag
                    <button class="button-light centered bookings-employee">08.00</button>
                    <button class="button-light centered bookings-employee">09.00</button>
                    <button class="button-light centered bookings-employee">10.00</button>
                    <button class="button-light centered bookings-employee">11.00</button>
                    <button class="button-light centered bookings-employee">12.00</button>
                    <button class="button-light centered bookings-employee">13.00</button>
                    <button class="button-light centered bookings-employee">14.00</button>
                    <button class="button-light centered bookings-employee">15.00</button>
                    </div>


                    <div class="col span_1_of_5 centered">Fredag
                    <button class="button-light centered bookings-employee">08.00</button>
                    <button class="button-light centered bookings-employee">09.00</button>
                    <button class="button-light centered bookings-employee">10.00</button>
                    <button class="button-light centered bookings-employee">11.00</button>
                    <button class="button-light centered bookings-employee">12.00</button>
                    <button class="button-light centered bookings-employee">13.00</button>
                    <button class="button-light centered bookings-employee">14.00</button>
                    <button class="button-light centered bookings-employee">15.00</button>
                    </div>
                </div>


                <div class="group section row">
                    <div class="col span_1_of_3"></div>
                        <button class="button button-dark centered col span_1_of_3" v-on:click="loggut()">Logg Ut</button>
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
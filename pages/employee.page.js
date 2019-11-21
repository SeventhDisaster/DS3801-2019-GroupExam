import {confirmLogin, logout} from '../components/Index.js';

const EmployeePage = {
    template: `
        <div class="content-box">
            <div class="group section row">
                <div class="col span_1_of_3 centered"></div>
                    <h1 class="col span_1_of_3 centered">{{title}}</h1>
                    <div class="col span_1_of_3 centered"></div>
                </div>

                <div class="group section row">
                <button class="col span_1_of_4 centered button-employee">Profil</button>
                <button class="col span_1_of_4 centered button-employee">Dagens timer</button>
                <button class="col span_1_of_4 centered button-employee">Mailboks</button>
                <button class="col span_1_of_4 centered button-employee">Klienter</button>
                </div>


                <div class="group section row">
                    <div class="col span_1_of_3 centered"></div>
                    <h2 class="col span_1_of_3 centered">Dager</h2>
                    <div class="col span_1_of_3 centered"></div>
                </div>

                <div class="group section row">
                    <div class="col span_1_of_5 centered">Mandag 25.11
                        <button class="button-light centered bookings-employee">08.00</button>
                        <button class="button-light centered bookings-employee">09.00</button>
                        <button class="button-light centered bookings-employee">10.00</button>
                        <button class="button-light centered bookings-employee">11.00</button>
                        <button class="button-light centered bookings-employee">12.00</button>
                        <button class="button-light centered bookings-employee">13.00</button>
                        <button class="button-light centered bookings-employee">14.00</button>
                        <button class="button-light centered bookings-employee">15.00</button>
                    </div>

                    <div class="col span_1_of_5 centered">Tirsdag 26.11
                        <button class="button-light centered bookings-employee">08.00</button>
                        <button class="button-light centered bookings-employee">09.00</button>
                        <button class="button-light centered bookings-employee">10.00</button>
                        <button class="button-light centered bookings-employee">11.00</button>
                        <button class="button-light centered bookings-employee">12.00</button>
                        <button class="button-light centered bookings-employee">13.00</button>
                        <button class="button-light centered bookings-employee">14.00</button>
                        <button class="button-light centered bookings-employee">15.00</button>
                    </div>


                    <div class="col span_1_of_5 centered">Onsdag 27.11
                        <button class="button-light centered bookings-employee">08.00</button>
                        <button class="button-light centered bookings-employee">09.00</button>
                        <button class="button-light centered bookings-employee">10.00</button>
                        <button class="button-light centered bookings-employee">11.00</button>
                        <button class="button-light centered bookings-employee">12.00</button>
                        <button class="button-light centered bookings-employee">13.00</button>
                        <button class="button-light centered bookings-employee">14.00</button>
                        <button class="button-light centered bookings-employee">15.00</button>
                    </div>


                    <div class="col span_1_of_5 centered">Torsdag 28.11
                        <button class="button-light centered bookings-employee">08.00</button>
                        <button class="button-light centered bookings-employee">09.00</button>
                        <button class="button-light centered bookings-employee">10.00</button>
                        <button class="button-light centered bookings-employee">11.00</button>
                        <button class="button-light centered bookings-employee">12.00</button>
                        <button class="button-light centered bookings-employee">13.00</button>
                        <button class="button-light centered bookings-employee">14.00</button>
                        <button class="button-light centered bookings-employee">15.00</button>
                    </div>


                    <div class="col span_1_of_5 centered">Fredag 29.11
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
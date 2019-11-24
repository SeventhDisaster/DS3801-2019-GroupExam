import {
    confirmLogin,
    logout
} from '../components/Index.js';

import {router} from '../router.js';

const EmployeePage = {
    template: `
        <div class="content-box">
            <div class="group section row">
                <div class="col span_1_of_5 centered"></div>
                <div class="col span_1_of_5 centered"></div>
                <div class="col span_1_of_5 centered"></div>
                <div class="col span_1_of_5 centered"></div>
                <button class="button-dark logout-employee-button left-float col span_1_of_5" v-on:click="loggut()">Logg ut</button>
        </div>
            
                <div class="group section row">
                    <div class="col span_1_of_3 centered"></div>
                    <h1 class="col span_1_of_3 centered employee-title">{{title}}</h1>
                    <div class="col span_1_of_3 centered"></div>
                </div>

                <div class="group section row">
                    <button @click="toProfile" class="col span_1_of_4 centered button-employee">Profil</button>
                    <button @click="toToday" class="col span_1_of_4 centered button-employee">Dagens timer</button>
                    <button @click="toMail" class="col span_1_of_4 centered button-employee">Mailboks</button>
                    <button @click="toClient" class="col span_1_of_4 centered button-employee">Klienter</button>
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
                        <button class="button-light centered bookings-employee">16.00</button>
                        <button class="button-light centered bookings-employee">17.00</button>
                        <button class="button-light centered bookings-employee">18.00</button>
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
                        <button class="button-light centered bookings-employee">16.00</button>
                        <button class="button-light centered bookings-employee">17.00</button>
                        <button class="button-light centered bookings-employee">18.00</button>
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
                        <button class="button-light centered bookings-employee">16.00</button>
                        <button class="button-light centered bookings-employee">17.00</button>
                        <button class="button-light centered bookings-employee">18.00</button>
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
                        <button class="button-light centered bookings-employee">16.00</button>
                        <button class="button-light centered bookings-employee">17.00</button>
                        <button class="button-light centered bookings-employee">18.00</button>
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
        loggut() {
            logout();
        },
        toProfle() {
            //Not yet
        },
        toToday() {
            router.push('/ansattidag');
        },
        toMail(){
            //Not yet
        },
        toClient() {
            router.push('/clientdata')
        }
    }
}

export default EmployeePage;
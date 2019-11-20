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
                    <div class="col span_1_of_5 centered">Mandag
                    <div class="button-dark centered bookings-employee">08.00</div>
                    <div class="button-dark centered bookings-employee">09.00</div>
                    <div class="button-dark centered bookings-employee">10.00</div>
                    <div class="button-dark centered bookings-employee">10.45</div>
                    <div class="button-dark centered bookings-employee">12.00</div>
                    <div class="button-dark centered bookings-employee">13.00</div>
                    <div class="button-dark centered bookings-employee">14.00</div>
                    <div class="button-dark centered bookings-employee">15.00</div>
                    </div>

                    <div class="col span_1_of_5 centered">Tirsdag
                    <div class="button-dark centered bookings-employee">08.00</div>
                    <div class="button-dark centered bookings-employee">09.00</div>
                    <div class="button-dark centered bookings-employee">10.00</div>
                    <div class="button-dark centered bookings-employee">10.45</div>
                    <div class="button-dark centered bookings-employee">12.00</div>
                    <div class="button-dark centered bookings-employee">13.00</div>
                    <div class="button-dark centered bookings-employee">14.00</div>
                    <div class="button-dark centered bookings-employee">15.00</div>
                    </div>


                    <div class="col span_1_of_5 centered">Onsdag
                    <div class="button-dark centered bookings-employee">08.00</div>
                    <div class="button-dark centered bookings-employee">09.00</div>
                    <div class="button-dark centered bookings-employee">10.00</div>
                    <div class="button-dark centered bookings-employee">10.45</div>
                    <div class="button-dark centered bookings-employee">12.00</div>
                    <div class="button-dark centered bookings-employee">13.00</div>
                    <div class="button-dark centered bookings-employee">14.00</div>
                    <div class="button-dark centered bookings-employee">15.00</div>
                    </div>


                    <div class="col span_1_of_5 centered">Torsdag
                    <div class="button-dark centered bookings-employee">08.00</div>
                    <div class="button-dark centered bookings-employee">09.00</div>
                    <div class="button-dark centered bookings-employee">10.00</div>
                    <div class="button-dark centered bookings-employee">10.45</div>
                    <div class="button-dark centered bookings-employee">12.00</div>
                    <div class="button-dark centered bookings-employee">13.00</div>
                    <div class="button-dark centered bookings-employee">14.00</div>
                    <div class="button-dark centered bookings-employee">15.00</div>
                    </div>


                    <div class="col span_1_of_5 centered">Fredag
                    <div class="button-dark centered bookings-employee">08.00</div>
                    <div class="button-dark centered bookings-employee">09.00</div>
                    <div class="button-dark centered bookings-employee">10.00</div>
                    <div class="button-dark centered bookings-employee">10.45</div>
                    <div class="button-dark centered bookings-employee">12.00</div>
                    <div class="button-dark centered bookings-employee">13.00</div>
                    <div class="button-dark centered bookings-employee">14.00</div>
                    <div class="button-dark centered bookings-employee">15.00</div>
                    </div>
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
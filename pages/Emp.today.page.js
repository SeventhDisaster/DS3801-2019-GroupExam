import * as components from '../components/Index.js';
import { getCurrentUser } from '../components/Index.js';
import { router } from '../router.js';

components.appointments

const EmployeeTodayPage = {
    template: `
    <div class="content-box">

        <div class="group section row">
            <button class="col span_1_of_9 button-dark button back-button" @click = "back">Tilbake</button>
            <div class="col span_1_of_9"></div>
            <div class="col span_1_of_9"></div>
            <div class="col span_1_of_9"></div>
            <div class="col span_1_of_9"></div>
            <div class="col span_1_of_9"></div>
            <div class="col span_1_of_9"></div>
            <div class="col span_1_of_9"></div>
        </div>

        <div class="group section row">
            <div class="col span_1_of_3"></div>
            <div class="col span_1_of_3 centered"><h1>{{title}}</h1></div>
            <div class="col span_1_of_3"></div>
        </div>

          

            <div class="group section row">
                <div class="col span_1_of_5">
                    <button @click="check" class="button-light centered bookings-employee">25.11</button>
                </div>
                <div class="col span_1_of_5">
                    <button @click="check" class="button-light centered bookings-employee">26.11</button>
                </div>
                <div class="col span_1_of_5">
                    <button @click="check" class="button-light centered bookings-employee">27.11</button>
                </div>
                <div class="col span_1_of_5">
                    <button @click="check" class="button-light centered bookings-employee">28.11</button>
                </div>
                <div class="col span_1_of_5">
                    <button @click="check" class="button-light centered bookings-employee">29.11</button>
                </div>
               
            </div>

            <!--//{{myAppointment.date}} -->
            <div>
                
                <div class="emp-today-style centered" v-for="myAppointment in myAppointments">
                    {{myAppointment.time}} <br> {{myAppointment.klient}}</div>
                    {{appointmentByDate}}
            </div>
    </div>`,
    data() {
        return {
            title: "Dagens timeavtaler",
            myAppointments: [],
            appointmentByDate: []
        }
    },
    mounted() {
    let user = components.getCurrentUser();
    let field = user.inField;

        for (let appointment of components.appointments) {
            if (appointment.type == field) {
                let editedAppointment = appointment;
                let date = editedAppointment.date.split("-");
                editedAppointment.date = `${date[2]}.${date[1]}`; 
            this.myAppointments.push(editedAppointment)
            }
        }
    },
    methods: {
        back() {
            router.push('/ansatt');
        },
        check: function(event) {
            this.appointmentByDate = [];
            this.appointmentByDate.push(event.path[0].innerHTML);
        }
    }
}

export default EmployeeTodayPage;
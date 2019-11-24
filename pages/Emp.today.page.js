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
                <div class="col span_1_of_3 centered"></div>
                <div class="col span_1_of_3 centered"><h2>Timer</h2></div>
                <div class="col span_1_of_3 centered"></div>
            </div>

            <div class="group section row centered">
                <div class="col span_1_of_3"></div>
                <div class="col span_1_of_3 emp-today-style centered" v-for="myAppointment in myAppointments">
                    {{myAppointment.time}} - {{myAppointment.date}}</div>
                <div class="col span_1_of_3"></div>
            </div>
    </div>`,
    data() {
        return {
            title: "Dagens timeavtaler",
            myAppointments: []
        }
    },
    mounted() {
    let user = components.getCurrentUser();
    let field = user.inField;

        for (let appointment of components.appointments) {
            if (appointment.type == field) {
                let editedAppointment = appointment;
                let date = editedAppointment.date.split("-");
                editedAppointment.date = `${date[2]}-${date[1]}-${date[0]}`; 
            this.myAppointments.push(editedAppointment)
            }
        }
    },
    methods: {
        back() {
            router.push('/ansatt');
        }
    }
}

export default EmployeeTodayPage;
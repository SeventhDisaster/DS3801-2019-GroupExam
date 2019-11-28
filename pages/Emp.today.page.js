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

          
            <div class="margin-box">
                <div class="group section row">
                <div class="col span_1_of_5">
                    <button id="btn1" @click="check" class="centered bookings-employee2">25.11</button>
                </div>
                <div class="col span_1_of_5">
                    <button @click="check" class=" centered bookings-employee2">26.11</button>
                </div>
                <div class="col span_1_of_5">
                    <button @click="check" class="centered bookings-employee2">27.11</button>
                </div>
                <div class="col span_1_of_5">
                    <button @click="check" class="centered bookings-employee2">28.11</button>
                </div>
                <div class="col span_1_of_5">
                    <button @click="check" class="centered bookings-employee2">29.11</button>
                </div>
               
            </div>
            </div>
            

            <!--//{{myAppointment.date}} -->
            <div v-for="myAppointment in myAppointments" v-if="myAppointment.date==date">
            
                <div class="emp-today-style">
                {{myAppointment.klient}} <br> {{myAppointment.time}}    <img class="del-button" src="./resources/delete-icon.svg"></div>
            </div>
    </div>`,
    data() {
        return {
            date: "25.11",
            title: "Dagens timeavtaler",
            myAppointments: [],
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
        document.getElementById("btn1").focus();

    },
    methods: {
        back() {
            router.push('/ansatt');
        },
        check: function(event) {
            console.log(event);
            //let element = document.getElementById(event.);
            this.date = event.path[0].innerHTML;
            
           
        }
    }
}

export default EmployeeTodayPage;
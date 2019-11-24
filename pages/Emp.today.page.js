import * as components from '../components/Index.js';
import { getCurrentUser } from '../components/Index.js';

components.appointments

const EmployeeTodayPage = {
    template: `
        <div>
            <h1>{{title}}</h1>
            <div v-for="myAppointment in myAppointments">
                {{myAppointment.date}} - {{myAppointment.time}}
            </div>
        </div>`,
    data() {
        return {
            title: "Employee day schedule page",
            myAppointments: []
        }
    },
    mounted() {
    let user = components.getCurrentUser();
    let field = user.inField;

        for (let appointment of components.appointments) {
            if (appointment.type == field) {
            this.myAppointments.push(appointment)
            }
        }
    }
}

export default EmployeeTodayPage;
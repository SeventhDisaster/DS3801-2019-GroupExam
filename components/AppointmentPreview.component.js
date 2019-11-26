import {Appointment, appointments, users, getCurrentUser,  updateAll } from './Index.js';
import { router } from "../router.js";

export default Vue.component('appointment-form-preview', {
    template: `
    <div class="centered booking-preview">
        <h3>Din Bestilling:</h3>
        <div class="booking-preview-receipt">
            <h5><strong>Behandlingsform:</strong></h5><p> {{type}} </h5>
            <h5><strong>Dato og Tid: </strong></h5><p> {{date}} - {{time}} </p>
            <h5 :style="{display: (comment ? 'block' : 'none')}"><strong>Din kommentar:</strong></h5><p> {{comment}} </p>
            <button :style="{opacity: ((type) && (date) && (time) ? 1 : 0.3) }" class="button button-dark" @click="makeAppointment">Bestill time!</button>
        </div>
    </div>
    `,
    props: ['type', 'date', 'time', 'comment'],
    methods: {
        makeAppointment() {
            updateAll();

            //Make sure all required fields are filled
            if (this.type && this.date && this.time) {
                let newAppointment = new Appointment(this.type, this.date, this.time, this.comment);
                console.log(newAppointment);

                //If a user is logged in
                if (getCurrentUser()) {
                    let currentUser = getCurrentUser();
                    for (let user of users) {
                        if (user.email === currentUser.email) {
                            user.appointmentIds.push(newAppointment.id);
                            appointments.push(newAppointment);
                            updateAll();
                            router.push('/brukerside')
                        }
                    }
                } else {
                    localStorage.setItem("holdingAppointment", JSON.stringify(newAppointment));
                    router.push('/login');
                }
            } else {
                alert("Du mangler nødvendig informasjon for å bestille en time")
            }
        }
    }
});
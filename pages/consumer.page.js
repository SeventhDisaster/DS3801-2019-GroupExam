import {confirmLogin, logout, getCurrentUser, getAppointments, appointments, } from '../components/index.js'

const ConsumerPage = {
    template: `
        <div>
            <cancel-overlay v-if="visible" @deleteAppointment="deleteAppointment" @hideOverlay="hideOverlay" :visible="visible"></cancel-overlay>
            <div id="consumer-container-m">
                <header id="consumerHeader" class="header-consumer-m">
                    <h3 class="username-consumer-m">{{name}}</h3>
                    <button class="button-header-consumer-m button" @click="userLoggingOut()">Logg ut</button>
                </header>
                <div>
                    <h1>{{title}}</h1>
                </div>
                <div class="booking-container-consumer-m">
                    <div class="upcoming-container-m">
                        <template v-for="item of userAppointments">
                            <div class="apmtbox-consumer-m">
                                <div class="apmtbox-type-consumer-m">{{item.type}}</div>

                                <div class="apmtbox-date-value-consumer-m">{{item.date}}</div>

                                <div class="apmtbox-time-value-consumer-m"> {{item.time}}</div>
                                <button :id="item.id" class="cancelbtn-consumer-m" @click="showOverlay(item.id)">X</button>
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            title: "Dine kommende bookinger",
            name: "", 
            userAppointments: [],
            visible: false, 
            id: ""
        }
    },
    mounted() {
        confirmLogin(); //Makes sure the user is logged in in order to access this site.
        let userObject = getCurrentUser();
        this.name = userObject.name;
        this.assignAppointments(userObject);
        this.sortDate();
    },
    methods: {
        userLoggingOut() {
            logout();
        },
        sortDate() {
            //Reordering date format for readability
            for(let i = 0; i < appointments.length; i++){
                const date = appointments[i].date.split("-").reverse();
                const finalDate = date[0]+"-"+date[1]+"-"+date[2];
                appointments[i].date = finalDate;
            }
        },
        assignAppointments(userObject) {
            // Assigning correct user appointments
            for(let i = 0; i < appointments.length; i++) {
                for(let j = 0; j < userObject.appointmentIds.length; j++) {
                    if(appointments[i].id === userObject.appointmentIds[j]) {
                        const item = appointments[i];
                        this.userAppointments.push(item);
                    } else { /*do nothing*/ }
                }
            }
            
            // sorting by date
            const arrayLength = this.userAppointments.length;
            let uaArray = this.userAppointments;
            
            for(let n = 0; n < arrayLength; n++) {
                for(let m = 0; m < arrayLength; m++) {
                   if(uaArray[n].date < uaArray[m].date) {
                       let a = uaArray[m];
                       uaArray[m] = uaArray[n];
                       uaArray[n] = a;
                    } else { 
                       // do nothing
                    }
                }
            }
            this.userAppointments = uaArray;
        },
        showOverlay(id) {
            this.id = id;
            this.visible = true;
        },
        hideOverlay() {
            this.visible = false;
        }, 
        deleteAppointment() {
            console.log("i ran")
        }
    }
}



export default ConsumerPage;
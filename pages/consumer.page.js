import {confirmLogin, logout, getCurrentUser, getAppointments, appointments, updateAll} from '../components/index.js'

const ConsumerPage = {
    template: `
        <div>
            <cancel-overlay v-if="visible" @deleteAppointment="deleteAppointment" @hideOverlay="hideOverlay" :visible="visible"></cancel-overlay>
            <div id="consumer-container-m">
                <header id="consumerHeader" class="header-consumer-m">
                    <h4 class="username-consumer-m">{{name}}</h4>
                    <button class="button-header-consumer-m button" @click="userLoggingOut()">Logg ut</button>
                </header>
                <div>
                    <h1 class="consumer-title-m">{{title}}</h1>
                </div>
                <div class="booking-container-consumer-m">
                    <div class="upcoming-container-m">
                        <!-- Upcoming bookings -->
                        <div v-if="myAppointments.length != 0"> <!-- Run if user has appointments -->
                            <template v-for="item of myAppointments">
                                <div class="apmtbox-consumer-m">
                                    <div class="apmtbox-type-consumer-m">{{item.type}}</div>
                                    <div class="apmtbox-date-value-consumer-m">{{item.date}}</div>
                                    <div class="apmtbox-time-value-consumer-m"> {{item.time}}</div>
                                    <button :id="item.id" class="cancelbtn-consumer-m" @click="showOverlay(item.id)">X</button>
                                </div>
                            </template>
                        </div>
                        <div v-else> <!-- Run if there is no appointments -->
                            <h4>{{noAppointmentsText}}</h4>
                        </div>
                        </div>
                        <div class="oldAppointments-container-m">
                            <div v-if="oldAppointments.length != 0">
                                <!-- Split between upcoming and previous bookings -->
                                <div class="previous-split-container-consumer-m">
                                    <div class="splitline-consumer-m"></div>
                                    <h4 class="previous-title-consumer-m">Tidligere bookinger</h4>
                                </div>
                                <!-- Previous bookings -->
                                    <div class="previus-bookings-consumer-m">
                                        <template v-for="preBooking of oldAppointments">
                                            <div class="apmtbox-consumer-m previous-consumer-m">
                                                <div class="apmtbox-type-consumer-m">{{preBooking.type}}</div>
                                                <div class="apmtbox-date-value-consumer-m">{{preBooking.date}}</div>
                                                <div class="apmtbox-time-value-consumer-m"> {{preBooking.time}}</div>
                                            </div>
                                        </template>
                                    </div>
                            </div>
                        </div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            title: "Dine bookinger",
            name: "", 
            noAppointmentsText: "Du har ingen bookinger.",
            previousText: "",
            myAppointments: [],
            appointHolder: [],
            oldAppointments: [],
            visible: false, 
            id: ""
        }
    },
    mounted() {
        confirmLogin(); //Makes sure the user is logged in in order to access this site.
        updateAll();
        let userObject = getCurrentUser(); //Gets the logged in user
        this.name = userObject.name;
        this.assignAppointments(userObject); //Gets the correct appointments of user
        this.sortAppointmentsByDate();
        this.sortArrayByDate(this.myAppointments);
        this.sortArrayByDate(this.oldAppointments);
        this.oldAppointments.reverse();
        this.parseDate(this.myAppointments); //Parses date format from "YYYY-MM-DD" => "DD-MM-YYYY"
        this.parseDate(this.oldAppointments); //Parses date format from "YYYY-MM-DD" => "DD-MM-YYYY"
    }, 
    methods: {
        userLoggingOut() {
            logout();
        },
        assignAppointments(userObject) {
            let appointments = getAppointments();
            
            // Assigning correct user appointments
            for (let i = 0; i < appointments.length; i++) {
                for (let j = 0; j < userObject.appointmentIds.length; j++) {
                    if (appointments[i].id === userObject.appointmentIds[j]) {
                        const item = appointments[i];
                        this.appointHolder.push(item);
                    } else { /*do nothing*/ }
                }
            }
        },
        sortAppointmentsByDate() {
            // sorting by date
            let uaArray = this.appointHolder;
            let comingArray = [];
            let pastArray = [];
            let today = "2019-11-22"; //Value checked for bookings already happened
            
            for(let i = 0; i < uaArray.length; i++) {
                if(uaArray[i].date < today) {
                    const item = uaArray[i];
                    pastArray.push(item);
                } else {
                    const item = uaArray[i];
                    comingArray.push(item);
                }
            }
            this.myAppointments = comingArray;
            this.oldAppointments = pastArray;
        },
        sortArrayByDate(inArray) {
            for(let i = 0; i < inArray.length; i++) {
                for(let n = 1; n <= inArray.length; n++) {
                    if(inArray[i] > inArray[n]) {
                        let a = inArray[n];
                        inArray[n] = inArray[i];
                        inArray[i] = a;
                    } else {/* Do nothing */}
                }
            }
        },
        parseDate(appointments) {
            //Reordering date format for readability
            for (let i = 0; i < appointments.length; i++) {
                const date = appointments[i].date.split("-").reverse();
                const finalDate = date[0]+"-"+date[1]+"-"+date[2];
                appointments[i].date = finalDate;
            }
        },
        showOverlay(id) {
            this.id = id;
            this.visible = true;
        },
        hideOverlay() {
            this.visible = false;
        }, 
        deleteAppointment() {
            let array = this.myAppointments;
            
            for (let item of array) {
                if (item.id === this.id) {
                    const index = array.indexOf(item);
                    this.myAppointments.splice(index, 1); 
                }
            }
        }
    }
}

export default ConsumerPage;
import {confirmLogin, logout, getCurrentUser, getAppointments, appointments} from '../components/index.js'

const ConsumerPage = {
    template: `
        <div>
            <div id="consumer-container">
                <header id="consumerHeader" class="header-consumer-m">
                    <h3 class="username-consumer-m">{{name}}</h3>
                    <button class="button-header-consumer-m button" @click="userLoggingOut()">Logg ut</button>
                </header>
                <div>
                    <h1>{{title}}</h1>
                </div>
                <div class="booking-container-consumer-m">
                    <div class="upcoming-container-m">
                        <template v-for="item of appointments">
                            <div class="apmtbox-consumer-m">
                                <div class="apmtbox-type-consumer-m">{{item.type}}</div>

                                <div class="apmtbox-date-value-consumer-m">{{item.date}}</div>

                                <div class="apmtbox-time-value-consumer-m"> {{item.time}}</div>
                                <button :id="item.id" class="cancelbtn-consumer-m" @click="overLayConsumer()">X</button>
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
            appointments: ""
        }
    },
    mounted() {
        confirmLogin(); //Makes sure the user is logged in in order to access this site.
        let userObject = getCurrentUser();
        this.name = userObject.name;
        this.sortDate();
        //make function to sort appointments
    },
    methods: {
        userLoggingOut() {
            logout();
        }, 
        sortDate() {
            for(let i = 0; i < appointments.length; i++){
                const date = appointments[i].date.split(".").reverse();
                const finalDate = date[0]+"."+date[1]+"."+date[2];
                appointments[i].date = finalDate;
            }

            //Assign to appointments above do sort out correct appointments
            console.log(appointments);
        },
        closeOverlay() {
            alert("Hello there");
        }
    
    }
}



export default ConsumerPage;
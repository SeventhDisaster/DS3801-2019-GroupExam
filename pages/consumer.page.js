import {confirmLogin, logout, getCurrentUser} from '../components/index.js'

const ConsumerPage = {
    template: `
        <div>

            <header class="header-consumer-m">
                <h3 class="username-consumer-m">{{name}}</h3>
                <button class="button-header-consumer-m button" v-on:click="userLoggingOut()">Logg ut</button>
            </header>
            <div>
                <h1>{{title}}</h1>
            </div>

            <div class="booking-container-consumer-m">
                <div class="upcoming-container-m">
                </div>

            </div>
        </div>`,
    data() {
        return {
            title: "Dine kommende bookinger",
            name: ""
        }
    },
    mounted() {
        confirmLogin(); //Makes sure the user is logged in in order to access this site.
        let userObject = getCurrentUser();
        this.name = userObject.name;
    },
    methods: {
        userLoggingOut() {
            logout();
        }
    }
}

export default ConsumerPage;
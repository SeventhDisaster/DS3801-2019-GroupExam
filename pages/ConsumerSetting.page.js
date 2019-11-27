import {confirmLogin, getCurrentUser, logout} from '../components/index.js'
import { router } from '../router.js';

const ConsumerSettingPage = {
    template: `
        <div>
            <div class="header-container-setting-m">
                <header id="consumerHeader" class="header-consumer-m">
                    <h4 class="username-consumer-m">{{name}}</h4>
                    <button class="button-header-consumer-m button" @click="userLoggingOut()">Logg ut</button>
                </header>
            </div>
            <h2 class="title-settings-m">{{title}}</h2>
            <div class="main-container-settings-m">
                <div class="status-settings-m" v-if=visibleStatus>{{status}}</div>
                <div class="user-name-settings-m">{{name}}</div>
                <input class="user-name-settings-input" placeholder="Endre navn">
                <div class="user-mail-settings-m">{{mail}}</div>
                <input class="user-mail-settings-input" placeholder="Endre e-mail">
                <div class="user-phone-settings-m">Tlf: {{phone}}</div>
                <input class="user-phone-settings-input" placeholder="Endre telefonnummer">
                <div class="user-password-settings-m">Passord</div>
                <input class="user-password-settings-input" placeholder="Endre passord">
                <div class="edit-button-settings-m" @click="infoChanged">Lagre endringer</div>
            </div>
            <footer>
                <div class="footer-container-settings-m">
                    <img src="../resources/arrowLeft.png" class="arrow-settings-m" @click="backToConsumerPage">
                    <a href="#/brukerside" class="back-link-settings-m">Tilbake til bookinger</a>
                </div>
            </footer>


        </div>
    `,
    data() {
        return {
            title: "Din informasjon",
            status: "Din informasjon er endret",
            name: "",
            mail: "",
            phone: "",
            visibleStatus: false

        }
    },
    mounted() {
        confirmLogin();
        let userObject = getCurrentUser(); //Gets the logged in user
        this.name = userObject.name;
        this.mail = userObject.email;
        this.phone = userObject.contactPhone;
    },
    methods: {
        userLoggingOut() {
            logout();
        },
        backToConsumerPage() {
            router.push("/brukerside");
        },
        infoChanged() {
            this.visibleStatus = true;
        }

    }
}

export default ConsumerSettingPage;
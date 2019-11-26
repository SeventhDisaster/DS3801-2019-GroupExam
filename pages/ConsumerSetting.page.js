import {confirmLogin, getCurrentUser, logout} from '../components/index.js'

const ConsumerSettingPage = {
    template: `
        <div>
            <div class="header-container-setting-m">
                <header id="consumerHeader" class="header-consumer-m">
                    <h4 class="username-consumer-m">{{name}}</h4>
                    <button class="button-header-consumer-m button" @click="userLoggingOut()">Logg ut</button>
                </header>
            </div>
            <div class="main-container-setting-m">
                <h3>{{title}}</h3>
                <div class="user-name-settings-m">{{name}}</div>
                <input class="user-name-settings-input" placeholder="Endre navn">
                <div class="user-mail-settings-m">{{mail}}</div>
                <input class="user-mail-settings-input" placeholder="Endre e-mail">
                <div class="user-phone-settings-m">{{phone}}</div>
                <input class="user-phone-settings-input" placeholder="Endre telefonnummer">
                <div class="user-password-settings-m">Passord</div>
                <input class="user-password-settings-input" placeholder="Endre passord">
            </div>
            <footer>
                <div class="footer-container-settings-m">
                    <a href="#/brukerside">Tilbake til bookinger</a>
                </div>
            </footer>


        </div>
    `,
    data() {
        return {
            title: "Din informasjon",
            name: "",
            mail: "",
            phone: ""

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
        }

    }
}

export default ConsumerSettingPage;
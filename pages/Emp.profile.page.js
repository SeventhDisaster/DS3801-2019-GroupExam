import { confirmLogin, logout, getCurrentUser} from '../components/Index.js';
import { router } from '../router.js';

const EmployeeProfilePage = {
    template: `
        <div>
            <div class="content-box">
                <div class="employee-profile-page">
                    <button class="col span_1_of_9 button-dark button back-button" @click = "back">Tilbake</button>
                    <h1 class="employee-profile-title">{{title}}</h1>
                    <div class="employee-profile-container">
                        <div class="employee-profile-name">Ditt registrerte navn: 
                            <div>{{name}}</div>
                        </div>
                        <br>
                        <div class="employee-profile-email">Din registrerte e-mail: 
                            <div>{{email}}</div>
                        </div>
                        <br>
                        <div class="employee-profile-phone">Ditt registrerte telefon nr: 
                            <div>{{phone}}</div>
                        </div>
                        <img src="../resources/sampleuser.png" class="employee-profile-picture">
                        <br>
                        <br>
                        <div class="employee-profile-message">Om din informasjon skulle være feil, vennligst kontakt skolens system ansvarlig for endringer eller din foreleser for å sende informasjonen videre.</div>
                    </div>
                </div>
            </div>
        </div>`,
    data() {
        return {
            title: "Ansatt profil",
            name: "",
            email: "",
            phone: ""
        }
    },
    mounted() {
        confirmLogin();
        let user = getCurrentUser();
        this.name = user.name;
        this.email = user.email;
        this.phone = user.phone;
    },
    methods: {
        loggoutUser() {
            logout();
        },
        back() {
            router.push('/ansatt');
        }
    }
}

export default EmployeeProfilePage;
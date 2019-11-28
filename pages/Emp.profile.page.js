import { confirmLogin, logout, getCurrentUser} from '../components/Index.js';
import { router } from '../router.js';

const EmployeeProfilePage = {
    template: `

    <div class="content-box">

        <div class="group section row">
            <div class="col span_1_of_9"><button class="button-dark button back-button back-button-employee" @click = "back">Tilbake</button></div>
            <div class="col span_1_of_9"></div>
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
            <div class="col span_1_of_3 centered"><h1 class="employee-profile-title">{{title}}</h1></div>
            <div class="col span_1_of_3"></div>
        </div>

        <div class="group section row">
            <div class="col span_1_of_6"></div>
            <div class="col span_1_of_6"></div>
            <div class="col span_2_of_6"></div>
            <div class="col span_1_of_6"></div>
            <div class="col span_1_of_6"><img src="../resources/sampleuser.png" class="employee-profile-picture"></div>
        </div>

        <br>

        <div class="group section row centered">
            <div class="col span_1_of_5"></div>
            <div class="col span_3_of_5 centered styling-client-information">
                        Ditt registrerte navn: {{name}}
                    <br>Din registrerte e-mail: {{email}}
                    <br>Ditt registrerte telefon nr: {{phone}}</div>
                <br>
                <div class="col span_1_of_5"></div>
        </div>
        <br>
        <br>

        <div class="group section row">
            <div class="col span_1_of_3"></div>
            <div class="col span_1_of_3 centered">Om din informasjon skulle være feil, vennligst kontakt skolens system ansvarlig for endringer eller din foreleser for å sende informasjonen videre.</div>
            <div class="col span_1_of_3"></div>
        </div>


    </div>
        `,
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
import * as components from '../components/index.js'
import {router} from '../router.js';

const EmployeeClientsPage = {
    template: `
<<<<<<< HEAD
    <div class="content-box">
        <img src="../resources/KristianiaUniversityCollege_hvit_rgb.png" class="employee-client-page">
=======
    <div class="content-box background-image-employee">
>>>>>>> 07dd4e2382975850df0940323f3a1152bcaf9d91
        <div class="group section row">
            <button class="col span_1_of_9 button-dark button back-button" @click = "back">Tilbake</button>
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
            <h1 class="col span_1_of_3 centered">{{title}}</h1>
            <div class="col span_1_of_3"></div>
        </div>

            <div class="" v-for="client in clients" :key="client.email">
                <client-list-element :user="client"></client-list-element>
                </div>
                <div class=""></div>
        </div>

        
    </div>`,
    data() {
        return {
            title: "Klient data side",
            clients: []
        }
    },
    mounted() {
        for (let user of components.users) {
            if (!user.isEmployed) {
                this.clients.push(user);
            }
        }
    },
    methods: {
        back() {
            router.push('/ansatt');
        }
    }
}

export default EmployeeClientsPage;
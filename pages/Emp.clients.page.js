import * as components from '../components/index.js'

const EmployeeClientsPage = {
    template: `
    <div class="content-box">
        <div class="group section row">
            <div class="col span_1_of_3"></div>
            <h1 class="col span_1_of_3">{{title}}</h1>
            <div class="col span_1_of_3"></div>

            <div class="group section row">
                <div v-for="client in clients" :key="client.email">
                    <client-list-element :user="client"></client-list-element>
                </div>
            </div>
        </div>
    </div>`,
    data() {
        return {
            title: "Employee client page",
            clients: []
        }
    },
    mounted() {
        for(let user of components.users) {
            if (!user.isEmployed) {
                this.clients.push(user);
            }
        }
    }
}

export default EmployeeClientsPage;
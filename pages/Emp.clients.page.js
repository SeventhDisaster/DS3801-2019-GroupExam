import * as components from '../components/index.js'

const EmployeeClientsPage = {
    template: `
        <div>
            <h1>{{title}}</h1>
            <div v-for="client in clients" :key="client.email">
                <client-list-element :user="client"></client-list-element>
            </div>
        </div>`,
    data() {
        return {
            title: "Employee client page",
            clients: []
        }
    },
    mounted() {
        for(let user of components.users){
            if(!user.isEmployed){
                this.clients.push(user);
            }
        }
    }
}

export default EmployeeClientsPage;
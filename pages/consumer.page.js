import {confirmLogin} from '../components/data.management.js'

const ConsumerPage = {
    template: `
        <div>
            <h1>{{title}}</h1>
        </div>`,
    data() {
        return {
            title: "Velkommen til brukersiden"
        }
    },
    mounted() {
        confirmLogin(); //Makes sure the user is logged in in order to access this site.
    }
}

export default ConsumerPage;
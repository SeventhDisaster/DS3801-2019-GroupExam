import * as components from '../components/Index.js';

const TestPage = {
    template: `
        <div>
            <h1>{{title}}</h1>
            <make-appointment></make-appointment>
            <button v-on:click="loggut()">Logg Ut</button>
        </div>`,
    data() {
        return {
            title: "This is where Krisp tests the dumb components."
        }
    }
}

export default TestPage;
import * as components from '../components/Index.js';

const TestPage = {
    template: `
        <div>
            <h1>{{title}}</h1>
            <make-appointment></make-appointment>
        </div>`,
    data() {
        return {
            title: "This is where Krisp tests the dumb components."
        }
    }
}

export default TestPage;
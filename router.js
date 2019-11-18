import FrontPage from './pages/Front.page.js'
import LoginPage from './components/LoginForm.component.js';
import EmployeePage from './pages/Employee.page.js';
import ConsumerPage from './pages/Consumer.page.js';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: FrontPage,
            meta: {
                title: "Home"
            }
        },
        {
            path: '/login',
            component: LoginPage,
            meta: {
                title: "Login"
            }
        },
        {
            path: '/ansatt',
            component: EmployeePage,
            meta: {
                title: "Ansatt Portal"
            }
        },
        {
            path: '/brukerside',
            component: ConsumerPage,
            meta: {
                title: "Bruker Portal"
            }
        }

    ]
})

router.beforeEach((to, _, next) =>{
    document.title = to.meta.title;
    next();
})

export {router};
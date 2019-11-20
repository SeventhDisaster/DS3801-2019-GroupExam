import FrontPage from './pages/Front.page.js'
import LoginPage from './pages/Login.page.js';
import EmployeePage from './pages/Employee.page.js';
import ConsumerPage from './pages/Consumer.page.js';
import RegisterPage from './pages/Register.page.js';

import Testpage from './pages/Test.page.js';

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: FrontPage,
            meta: {
                title: "Hjem"
            }
        },
        {
            path: '/login',
            component: LoginPage,
            meta: {
                title: "Logg Inn"
            }
        },
        {
            path: '/register',
            component: RegisterPage,
            meta: {
                title: "Registrering"
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
        },
        {
            path: '/test',
            component: Testpage,
            meta: {
                title: "Hodeverk og sånn"
            }
        }

    ]
})

router.beforeEach((to, _, next) =>{
    document.title = to.meta.title;
    next();
})

export {router};
import FrontPage from './pages/Front.page.js'
import LoginPage from './pages/Login.page.js';
import EmployeePage from './pages/Employee.page.js';
import ConsumerPage from './pages/Consumer.page.js';
import RegisterPage from './pages/Register.page.js';
import BookingPage from './pages/Booking.page.js';
import EmployeeClientsPage from './pages/Emp.clients.page.js';
import EmployeeTodayPage from './pages/Emp.today.page.js';

import Testpage from './pages/Test.page.js';

router.push("/register")

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
            path: '/ansattidag',
            component: EmployeeTodayPage,
            meta: {
                title: "Din Timeplan"
            }
        },
        {
            path: '/klientdata',
            component: EmployeeClientsPage,
            meta: {
                title: "Klient liste"
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
            path: '/booking',
            component: BookingPage,
            meta: {
                title: "Timebestilling"
            }
        },
        {
            //Delete test-page later
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
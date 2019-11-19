//This file contains a sample dataset of users
//Constructor for user object (Applicable only for regular users) Our project does not allow creating employees
class User {
    constructor(name, password, phone, email) {
        this.name = name;
        this.password = password;
        this.isEmployed = false;
        this.inField = null;
        this.phone = phone;
        this.email = email;
        this.appointments = [];
    }
}

class Appointment {
    constructor(type, date, time, note, assigned){
        this.type = type;
        this.date = date;
        this.time = time;
        this.note = note;
        this.assigned = assigned;
    }
}

//Sample userlist, obviously login information would not be stored this openly in a real scenario
let users = [
    {
        name: "Ole Nordmann",
        password: "Test123",
        isEmployed: false,
        inField: null,
        contactPhone: "12345678",
        email: "bruker@epost.no",
        appointments: [
            {
                type: "Osteopati",
                date: "12/11",
                time: "16:00 - 17:00",
                note: "Vondt i beina for faen",
                assigned: "Worker1"
            },
            {
                type: "Akupunktur",
                date: "13/11",
                time: "10:00 - 11:00",
                note: "Stikk meg",
                assigned: "Worker2"
            }
        ]
    },
    {
        name: "Kari Kroppsbrekker",
        password: "Osteopop",
        isEmployed: true,
        inField: "Osteopat",
        phone: "11122333",
        email: "ansatt1@clinic.no",
        appointments: []
    },
    {
        name: "James Stabsalot",
        password: "ProStabber1337",
        isEmployed: true,
        inField: "Akupunktør",
        phone: "22211333",
        email: "ansatt2@clininc.no",
        appointments: []
    },
    {
        name: "Sten Gomlefjes",
        password: "FastFud4Life",
        isEmployed: true,
        inField: "Kostholdsveileder",
        phone: "33322111",
        email: "ansatt3@clinic.no",
        appointments: []
    },
    {
        name: "Anita Hakkekondis",
        password: "123456", //verken kondis eller passordstyrke
        isEmployed: true,
        inField: "Fysiolab",
        phone: "33311222",
        email: "ansatt4@clinic.no",
        appointments: []
    }
]

//Loops through user-array and assigns appointments to employees
function setEmployeeAppointments(){
    for(let user of users){
        if(user.isEmployed){
            user.appointments = [];
            for(let user2 of users){
                if(user2.name !== user.name){
                    for(let appointment of user2.appointments){
                        if(appointment.assigned == user.name){
                            user.appointments.push(appointment);
                        }
                    }
                }
            }
        }
    }
}

function setUsers(userData) {
    users = userData;
}

setEmployeeAppointments();

export {User, Appointment, users, setEmployeeAppointments, setUsers};

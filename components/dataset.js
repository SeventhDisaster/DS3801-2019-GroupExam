//This file contains a sample dataset of users

//Constructor for user object
function User(name, password, isEmployed, phone, email){
    this.name = name;
    this.password = password;
    this.isEmployed = isEmployed;
    this.phone = phone;
    this.email = email;
    this.appointments = [];
}

//Sample userlist, obviously login information would not be stored this openly in a real scenario
let users = [
    {
        name: "Ole Nordmann",
        password: "Test123",
        isEmployed: false,
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
        name: "Kari Muskelbrekker",
        password: "Osteopro666",
        isEmployed: true,
        phone: "11122333",
        email: "ansatt1@clinic.no",
        appointments: []
    },
    {
        name: "James Stabsalot",
        password: "ProStabber1337",
        isEmployed: true,
        phone: "22211333",
        email: "ansatt2@clininc.no",
        appointments: []
    }
]

//Loops through user-array and assigns appointments to employees
function setEmployeeAppointments(){
    for(let user of users){
        if(user.isEmployed){
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
console.log(users);

export {users, setEmployeeAppointments, setUsers, User};

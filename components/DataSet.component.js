//This file contains a sample dataset of users
//Constructor for user object (Applicable only for regular users) Our project does not allow creating employees

//Available Times

class User {
    constructor(name, password, phone, email) {
        this.name = name;
        this.password = password;
        this.isEmployed = false;
        this.inField = null;
        this.phone = phone;
        this.email = email;
        this.appointmentIds = [];
        this.notes = [];
    }

    function addNewAppointment(type, date, time, comment) {
        let newAppointment = new Appointment(
            type, date, time, comment
        )
        appointments.push(newAppointment);
    }
}

class Appointment {
    constructor(type, date, time, comment, assigned){
        this.id = appointments.length;
        this.type = type;
        this.date = date;
        this.time = time;
        this.comment = comment;
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
        appointmentIds: []
    },
    {
        name: "Kari Kroppsbrekker",
        password: "Osteopop",
        isEmployed: true,
        inField: "Osteopat",
        phone: "11122333",
        email: "ansatt1@clinic.no",
        appointmentIds: []
    },
    {
        name: "James Stabsalot",
        password: "ProStabber1337",
        isEmployed: true,
        inField: "Akupunktør",
        phone: "22211333",
        email: "ansatt2@clininc.no",
        appointmentIds: []
    },
    {
        name: "Sten Gomlefjes",
        password: "FastFud4Life",
        isEmployed: true,
        inField: "Kostholdsveileder",
        phone: "33322111",
        email: "ansatt3@clinic.no",
        appointmentIds: []
    },
    {
        name: "Anita Hakkekondis",
        password: "123456", //verken kondis eller passordstyrke
        isEmployed: true,
        inField: "Fysiolab",
        phone: "33311222",
        email: "ansatt4@clinic.no",
        appointmentIds: []
    }
]

let appointments = [
    {

    }
]

function setUsers(userData) {
    users = userData;
}


export {User, Appointment, users, setEmployeeAppointments, setUsers};

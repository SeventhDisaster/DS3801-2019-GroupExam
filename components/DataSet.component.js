import { updateUsersData , updateAppointmentsData} from "./Index.js";

//This file contains a sample dataset of users
//Constructor for user object (Applicable only for regular users) Our project does not allow creating employees

//Available Times are hours between 8:00 and 16:00

//User Class
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

    addNewAppointment(type, date, time, comment) {
        let newAppointment = new Appointment(
            type, date, time, comment
        )
        appointments.push(newAppointment);
    }
}

class Appointment {
    constructor(type, date, time, comment) {
        this.id = appointments.length;
        this.type = type; // Osteopati, Akupunktur, Kostholdsveiledning, Fysiolab
        this.date = date;
        this.time = time;
        this.comment = comment;
        for(let user of users){
            if(this.type === user.inField && user.isEmployed){
                this.assigned = user.name; //Assigned auto applies to the employee in the field
            }
        }
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
        appointmentIds: [0, 1],
        notes: ["Er veldig Norsk", "Drikker for lite kaffe"],
    },
    {
        name: "Kari Kroppsbrekker",
        password: "Osteopop",
        isEmployed: true,
        inField: "Osteopati",
        phone: "11122333",
        email: "ansatt1@clinic.no",
        appointmentIds: []
    },
    {
        name: "James Stabsalot",
        password: "ProStabber1337",
        isEmployed: true,
        inField: "Akupunktur",
        phone: "22211333",
        email: "ansatt2@clininc.no",
        appointmentIds: []
    },
    {
        name: "Sten Gomlefjes",
        password: "FastFud4Life",
        isEmployed: true,
        inField: "Kostholdsveiledning",
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
        id: 0,
        type: "Osteopati",
        date: "2019-11-25",
        time: "09:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker"
    },
    {
        id: 1,
        type: "Akupunktur",
        date: "2019-12-07",
        time: "12:00",
        comment: "Kommer til å bli stabbet!",
        assigned: "James Stabsalot"
    }
]

function setUsers(userData) {
    users = userData;
    updateUsersData();
}

function setAppointments(appointmentsData) {
    appointments = appointmentsData;
    updateAppointmentsData();
}

export {User, Appointment, users, setUsers, setAppointments, appointments};

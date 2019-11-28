import { updateAll } from "./Index.js";

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
        for (let user of users) {
            if (this.type === user.inField && user.isEmployed) {
                this.assigned = user.name; //Assigned auto applies to the employee in the field
            }
        }
    }
}

//Sample userlist, obviously login information would not be stored this openly in a real scenario
let users = [
    {
        name: "Ola Nordmann",
        password: "Test123",
        isEmployed: false,
        inField: null,
        contactPhone: "12345678",
        email: "brukermann@epost.no",
        appointmentIds: [0, 1, 3],
        notes: ["Er veldig norsk", "Drikker for lite kaffe"],
    },
    {
        name: "Nora Nordkvinne",
        password: "Test456",
        isEmployed: false,
        inField: null,
        contactPhone: "23456789",
        email: "brukerdame@epost.no",
        appointmentIds: [],
        notes: ["Litt for eksentrisk", "Drikker bare vann og sprit"],
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
        date: "2019-11-28",
        time: "14:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Josefine Klandux" 
    },
    {
        id: 1,
        type: "Akupunktur",
        date: "2019-12-07",
        time: "12:00",
        comment: "Kommer til å bli stabbet!",
        assigned: "James Stabsalot"
    }, 
    {
        id: 2,
        type: "Fysiologisk Testlab",
        date: "2019-06-21",
        time: "13:00",
        comment: "Ingen kommentar",
        assigned: "Anita Hakkekondis"
    },
    {
        id: 3,
        type: "Kostholdsveiledning",
        date: "2019-11-25",
        time: "18:00",
        comment: "Jeg er sulten, veiled meg",
        assigned: "Sten Gomlefjes", 
        klient: "Bard Bumbur"
    },
    {
        id: 4,
        type: "Osteopati",
        date: "2019-11-26",
        time: "11:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Marn Jevelingside"
    },
    {
        id: 5,
        type: "Osteopati",
        date: "2019-11-26",
        time: "13:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Julian Grusom" 
    },
    {
        id: 6,
        type: "Osteopati",
        date: "2019-11-26",
        time: "14:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Ingrid Kobolt" 
    },
    {
        id: 7,
        type: "Osteopati",
        date: "2019-11-25",
        time: "14:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Markus Semen" 
    },
    {
        id: 8,
        type: "Osteopati",
        date: "2019-11-25",
        time: "11:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Marn Jevelingside"
    },
    {
        id: 9,
        type: "Osteopati",
        date: "2019-11-27",
        time: "10:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Ingrid Kobolt" 
    },
    {
        id: 10,
        type: "Osteopati",
        date: "2019-11-27",
        time: "14:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Markus Semen" 
    },
    {
        id: 11,
        type: "Osteopati",
        date: "2019-11-29",
        time: "11:00",
        comment: "Dette er en kommentar fra bruker",
        assigned: "Kari Kroppsbrekker",
        klient: "Marn Jevelingside"
    },


]

function setUsers(userData) {
    users = userData;
    updateAll();
}

function setAppointments(appointmentsData) {
    appointments = appointmentsData;
    updateAll();
}

export {User, Appointment, users, setUsers, setAppointments, appointments};

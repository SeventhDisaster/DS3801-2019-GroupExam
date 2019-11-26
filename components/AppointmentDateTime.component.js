import { appointments } from "./Index.js";

export default Vue.component('appointment-form-datetime', {
    template: `
    <div>
        <div :style="{display: (dateSelected ? 'none' : 'block')}">
            <h3 class="booking-component-header">Velg dato</h3>
            <p class="booking-date-warning">{{invalidDateInfo}}</p>
            <input class="booking-date-input" type="date" :min="currentDate" :value="dateInput" @input="setDate($event.target.value)" placeholder="Dato" required/>
        </div>

        <div>
            <form class="centered" :style="{display: (dateSelected ? 'block' : 'none')}">
                <p class="booking-date" @click="editDate"><strong>Dato</strong><br> {{dayName}} {{day}} - {{month}} - {{year}}</p>
                <h3 class="booking-component-header">Velg tid</h3>
                <label v-for="time in times" class="booking-time-radio button button-dark">
                    <div>
                        <input type="radio" name="time" :value="time" @change="$emit('inputTime' , $event.target.value)"/> {{time}}
                    </div>
                </label>
            </form>
        </div>
    </div>
    `,
    props: ['inputDate', 'inputTime'],
    data() {
        return {
            dateInput: "",
            dateSelected: false,
            date: "",
            dayName: "",
            day: "",
            month: "",
            year: "",
            invalidDateInfo: "",
            currentDate: "",
            times: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
            days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
            months: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember']
        }
    },
    mounted() {
        let currentDate = `${new Date().getFullYear()}-${new Date().getMonth()+1}-${new Date().getDate()}`
        this.currentDate = currentDate;
    },
    methods: {
        setDate(date) {
            this.dateInput = date;
            this.date = new Date(date);
            this.findOpenTimes();
            let dayIndex = this.date.getDay();
            this.dayName = this.days[dayIndex];
            this.day = this.date.getDate();
            this.month = this.months[this.date.getMonth()];
            this.year = this.date.getFullYear();
            let isWeekend = (dayIndex === 6) || (dayIndex === 0) //Check if Saturday or Sunday
            let currentDate = new Date();
            let tomorrowDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${parseInt(currentDate.getDate()) + 1}`;
            if(isWeekend || date < tomorrowDate){
                this.dateSelected = false; //No appointments during weekends
                this.invalidDateInfo = "Klinikken er ikke åpen i helgene";
                if(date < tomorrowDate){
                    this.invalidDateInfo = "Kan ikke bestille timer tidligere enn 1 dag i forkant";
                }
                this.dateInput = "";
            } else {
                this.invalidDateInfo = "";
                this.dateSelected = true;
                this.$emit('inputDate', date);
            }
        },
        findOpenTimes() {
            for (let appointment of appointments) {
                if (appointment.date == this.date) {
                    alert(appointment);
                    for (let time in this.times) {
                        if (this.times[time] == appointment.time) {
                            this.times.splice(time,1);
                        }
                    }
                }
            }
        },
        setTime(time) {
            this.$emit('inputTime', time);
        },
        editDate() {
            this.dateSelected = false;
        },
        enter() {
            this.$emit('enter')
        }
    }

});
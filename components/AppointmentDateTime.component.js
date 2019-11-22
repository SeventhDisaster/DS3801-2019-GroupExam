export default Vue.component('appointment-form-datetime', {
    template: `
    <div>
        <div :style="{display: (dateSelected ? 'none' : 'block')}">
            <h3>Velg Dato</h3>
            <input type="date" @input="setDate($event.target.value)" placeholder="Dato" required/>
        </div>

        <div>
            <form :style="{display: (dateSelected ? 'block' : 'none')}">
                <p class="booking-date" @click="editDate"><strong>Dato:</strong> {{dayName}} {{day}} - {{month}} - {{year}}</p>
                <h3>Velg Tid</h3>
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
            dateSelected: false,
            date: "",
            dayName: "",
            day: "",
            month: "",
            year: "",
            times: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
            days: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
            months: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember']
        }
    },
    methods: {
        setDate(date) {
            this.date = new Date(date);
            let dayIndex = this.date.getDay();
            this.dayName = this.days[dayIndex];
            this.day = this.date.getDate();
            this.month = this.months[this.date.getMonth()];
            this.year = this.date.getFullYear();
            let isWeekend = (dayIndex === 6) || (dayIndex === 0) //Check if Saturday or Sunday
            if(isWeekend){
                this.dateSelected = false; //No appointments during weekends
            } else {
                this.dateSelected = true;
                this.$emit('inputDate', date);
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
export default Vue.component('appointment-form-datetime', {
    template: `
    <div>
        <div>
            <h3>Velg Dato: *</h3>
            <input type="date" @input="setDate($event.target.value)" placeholder="Dato" required/>
        </div>

        <div>
            <form :style="{display: (dateSelected ? 'block' : 'none')}">
                <h3>Velg Tid: *</h3>
                <label v-for="time in times">
                    <input type="radio" name="time" :value="time" @change="$emit('inputTime' , $event.target.value)"/> {{time}}
                </label>
            </form>
        </div>
    </div>
    `,
    props: ['inputDate', 'inputTime'],
    data() {
        return {
            dateSelected: false,
            times: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00']
        }
    },
    methods: {
        setDate(date) {
            let day = new Date(date).getDay();
            let isWeekend = (day === 6) || (day === 0) //Check if Saturday or Sunday
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
        enter(){
            this.$emit('enter')
        }
    }

});
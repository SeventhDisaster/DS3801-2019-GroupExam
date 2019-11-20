export default Vue.component('appointment-form-datetime', {
    template: `
    <div>
        <h3>Velg Tid og Dato:</h3>
        <input type="text" :value="value" @input="setDate($event.target.value)" placeholder="Dato" />
        <input type="text" :value="value" @input="setTime($event.target.value)" placeholder="Tid" />
    </div>
    `,
    props: ['inputDate', 'inputTime'],
    methods: {
        setDate(date) {
            this.$emit('inputDate', date);
        },
        setTime(time) {
            this.$emit('inputTime', time);
        }
    }

});
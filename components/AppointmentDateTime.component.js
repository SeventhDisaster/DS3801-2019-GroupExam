export default Vue.component('appointment-form-datetime', {
    template: `
    <div>
        <h3>Velg Tid og Dato:</h3>
        <input type="text" @input="setDate($event.target.value)" @keyup.enter="enter" placeholder="Dato" />
        <input type="text" @input="setTime($event.target.value)" @keyup.enter="enter" placeholder="Tid" />
    </div>
    `,
    props: ['inputDate', 'inputTime'],
    methods: {
        setDate(date) {
            this.$emit('inputDate', date);
        },
        setTime(time) {
            this.$emit('inputTime', time);
        },
        enter(){
            this.$emit('enter')
        }
    }

});
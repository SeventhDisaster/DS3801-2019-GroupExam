export default Vue.component('appointment-form-type', {
    template: `
    <div>
        <h3>Velg behandlingsform: *</h3>
        <input type="button" @click="setType('Ost')" value="Osteopati"/>
        <input type="button" @click="setType('Aku')" value="Akupunktur"/>
        <input type="button" @click="setType('Kos')" value="Kostholdsveiledning"/>
        <input type="button" @click="setType('Fys')" value="Fysiologisk Testlab"/>
    </div>
    `,
    props: ['type'],
    methods: {
        setType(type) {
            this.$emit('selected', type)
        }
    }
});
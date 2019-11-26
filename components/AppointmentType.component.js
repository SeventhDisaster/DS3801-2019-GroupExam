export default Vue.component('appointment-form-type', {
    template: `
    <div class="booking-component">
        <h3 class="booking-component-header">Velg behandlingsform</h3>
        <div class="type-selection-container">
            <input class="button button-dark booking-type-button" type="button" @click="setType('Ost')" value="Osteopati"/>
            <input class="button button-dark booking-type-button" type="button" @click="setType('Aku')" value="Akupunktur"/>
            <input class="button button-dark booking-type-button" type="button" @click="setType('Kos')" value="Kostholdsveiledning"/>
            <input class="button button-dark booking-type-button" type="button" @click="setType('Fys')" value="Fysiologisk Testlab"/>
        </div>
    </div>
    `,
    props: ['type'],
    methods: {
        setType(type) {
            this.$emit('selected', type)
        }
    }
});
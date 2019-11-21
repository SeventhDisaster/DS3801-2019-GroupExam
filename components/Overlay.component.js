export default Vue.component("cancel-overlay", {
    template: `
    <div id="greyaera-m" class="greyarea-container-m overlay-common">
        <div class="cancel-appointment-box-m overlay-common">
            <div class="cancel-message-m overlay-common">Er du sikker på at du vil kansellere timen din?</div>
            <div class="detail-appointment-m overlay-common"> den , kl</div>
            <input type="text" class="commentbox-overlay-m">
            <button class="button cancel-button-overlay-m" @click="cancelAppointment()">Ja, kanseller</button>
            <button class="button abort-button-overlay-m" @click="remove()">Nei, behold</button>
        </div>
    </div>
    `,
    methods: {
        cancelAppointment() {
            console.log("pressed cancel appointment");
            
            //this.$emit("cancel");
        },
        remove() {
            console.log("pressed remove overlay");
        }

        //making on click to send back when pressed to delete the appointment
    }
});
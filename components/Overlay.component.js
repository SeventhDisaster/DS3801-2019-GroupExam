export default Vue.component("cancel-overlay", {
    template: `
    <div class="greyaera-m" v-on:click="closeOverlay()">
        <div class="cancel-appointment-box-m">
            <div class="cancel-message-m">Er du sikker på at du vil kansellere timen din?</div>
            <div class="infobox-m">
                <div class="detail-appointment-m">{{}} den {{}}, kl {{}}</div>
            </div>
            <div class="button-container-m">
                <button class="button">Ja, kanseller</button>
                <button class="button">Nei, behold</button>
            </div>
        </div>
    </div>
    `,
    method: {
        delete() {
            this.$emit("delete");
        }

        //making on click to send back when pressed to delete the appointment
    }
});
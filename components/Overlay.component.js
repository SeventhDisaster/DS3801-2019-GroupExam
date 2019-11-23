

export default Vue.component("cancel-overlay", {
    template: `
    <div id="greyarea-m" class="greyarea-container-m">
        <div class="cancel-appointment-box-m">
            {{appointment}}
            <div class="cancel-message-m">Er du sikker på at du vil kansellere timen din?</div>
            <div class="cancel-type-overlay-m">Osteopati</div>
            <div class="detail-appointment-m">den 11-11-2019, kl 13:00</div>
            <input type="text" class="commentbox-overlay-m">
            <button class="button cancel-button-overlay-m" @click='cancelAppointment()'>Ja, kanseller</button>
            <button class="button abort-button-overlay-m" @click="remove()">Nei, behold</button>
        </div>
    </div>
    `,
    props: ['id', 'appointment'],
    methods: {
        cancelAppointment() {
            this.$emit("hideOverlay");
            this.$emit("deleteAppointment");
        },
        remove() {
            this.$emit("hideOverlay");
        }
    }
});




export default Vue.component("cancel-overlay", {
    template: `
    <div id="greyarea-m" class="greyarea-container-m">
        <div class="cancel-appointment-box-m">
            {{appointment}}
            <div class="cancel-message-m">Er du sikker på at du vil kansellere timen din?</div>
            <h3 class="cancel-type-overlay-m">Osteopati</h3>
            <div class="detail-appointment-m">Den 11-11-2019, kl 13:00</div>
            <textarea type="textarea" class="commentbox-overlay-m" placeholder="Skriv grunn for kansellering"></textarea>
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


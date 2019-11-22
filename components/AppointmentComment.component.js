export default Vue.component('appointment-form-comment', {
    template: `
    <div class="centered">
        <h3 class="booking-component-header">[Valgfritt] Skriv en kommentar:</h3>
        <textarea class="booking-comment" type="text" @input="setComment($event.target.value)" @keyup.enter="enter" placeholder="Din kommentar her"> </textarea>
        <button class="button button-dark booking-comment-continue" @click="$emit('enter')"> Fortsett </button>
    </div>
    `,
    props: ['comment'],
    methods: {
        setComment(comment) {
            this.$emit('inputComment', comment)
        },
        enter() {
            this.$emit('enter');
        }
    }
});
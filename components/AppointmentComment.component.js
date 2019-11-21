export default Vue.component('appointment-form-comment', {
    template: `
    <div>
        <h3>[Valgfritt] Skriv en kommentar:</h3>
        <textarea type="text" @input="setComment($event.target.value)" @keyup.enter="enter" placeholder="Din kommentar her"> </textarea>
        <button @click="$emit('enter')"> Fortsett </button>
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
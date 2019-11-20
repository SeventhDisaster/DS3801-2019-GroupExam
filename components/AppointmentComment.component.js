export default Vue.component('appointment-form-comment', {
    template: `
    <div>
        <h3>Skriv en kommentar:</h3>
        <textarea type="text" :value="value" @input="setComment($event.target.value)" placeholder="Din kommentar her"> </textarea>
    </div>
    `,
    props: ['comment'],
    methods: {
        setComment(comment) {
            this.$emit('inputComment', comment)
        }
    }
});
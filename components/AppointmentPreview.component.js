export default Vue.component('appointment-form-preview', {
    template: `
    <div>
        <h3>Din Bestilling:</h3>
        <h5><strong>Behandling:<strong></h5><p> {{type}} </h5>
        <h5><strong>Dato og Tid: <strong></h5><p> {{date}} - {{time}} </p>
        <h5><strong>Din Kommentar:<strong></h5><p> {{comment}} </p>
    </div>
    `,
    props: ['type', 'date', 'time', 'comment'],
});
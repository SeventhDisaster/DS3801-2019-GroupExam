export default Vue.component('appointment-form-preview', {
    template: `
    <div>
        <h3>Din Bestilling:</h3>
        <p>Behandling: </p><input readonly type="text" placeholder="Type" :value="type"/>
        <p>Dato: </p><input readonly type="text" placeholder="Date"  :value="date"/>
        <p>Klokkeslett: </p><input readonly type="text" placeholder="Time" :value="time" />
        <p>Kommentar: </p><textarea readonly :value="comment"></textarea>
    </div>
    `,
    props: ['type', 'date', 'time', 'comment'],
});
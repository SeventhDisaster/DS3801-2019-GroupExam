import * as components from './index.js';

export default Vue.component('client-list-element', {
    template: `
    <div>
        <label>{{user.name}}    
            <input type="checkbox" v-model="isActive">
        </label>
        <div v-show="isActive">
            <ul>
                <li v-for="(note, index) in user.notes">
                    <input @keyup="setNoteChange(user.email, index, $event.target.value)" :value="note">
                    <button @click="deleteNote(user.email, index, note)">Delete Note</button>
                </li>
            </ul>
            <form>
                <textarea v-model="newNote" placeholder="Skriv nytt notat her" @keyup.enter="addNote(user.email)"></textarea>
                <button class="" action="submit" @click="addNote(user.email)">Add new note</button>
            </form>
        </div>
    </div>
    `,
    props: ['user'],
    data() {
        return {
            isActive: false,
            newNote: ""
        }
    },
    methods: {
        setNoteChange(userEmail, noteIndex, note) {
            for (let user of components.users) {
                if (user.email == userEmail) {
                    user.notes[noteIndex] = note;
                }
            }
        },
        deleteNote(userEmail, noteIndex, note) {
            if (confirm("Are you sure you want to delete: \n" + note)) {
                for (let user of components.users) {
                    if (user.email == userEmail) {
                        user.notes.splice(noteIndex, 1);
                        components.updateAll();
                    }
                }
            }
        },
        addNote(userEmail) {
            for(let user of components.users) {
                if(user.email == userEmail){
                    user.notes.push(this.newNote);
                    this.newNote = "";
                }
            }
        }
    }
});
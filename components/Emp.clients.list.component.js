import * as components from './index.js';

export default Vue.component('client-list-element', {
    template: `
    <div class="group section row">
        
        <div class="col span_1_of_2 user-info-box">

            <div class="group section row">
                    <label class="user-info-label">{{user.name}}    
                        <input type="checkbox" style="display:none" v-model="isActive">
                    </label>
                    <button class="esc-button"></button>

                

                <div v-show="isActive">
                    <ul class="list-style">
                        <li v-for="(note, index) in user.notes">
                            <input class="note-input centered" @keyup="setNoteChange(user.email, index, $event.target.value)" :value="note">
                            <button class="button button-light delete-button" @click="deleteNote(user.email, index, note)">Slett</button>
                        </li>
                    </ul>

                    <form class="new-note-form group section row centered">
                        <div class="col span_1_of_3 centered"></div>
                            <textarea class="col span_3_of_3 centered form-text-area" v-model="newNote" placeholder="Skriv nytt notat her" @keyup.enter="addNote(user.email)"></textarea>
                        <div class="col span_1_of_3 centered"></div>

                    <div class="group section row">
                        <div class="col span_1_of_3"></div>
                            <button class="button button-light new-note-button centered col span_1_of_3" action="submit" @click="addNote(user.email)">Nytt notat</button>
                        <div class="col span_1_of_3"></div>
                    </div>
                    </form>
                </div>

                </div>

            </div>
            
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
            for (let user of components.users) {
                if (user.email == userEmail) {
                    user.notes.push(this.newNote);
                    this.newNote = "";
                }
            }
        }
    }
});
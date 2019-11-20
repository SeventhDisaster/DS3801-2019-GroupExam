export default Vue.component('make-appointment',{
    template: `
        <div>
            <button>Cancel</button>
            <appointment-form-type @selected="setType"></appointment-form-type>
            <appointment-form-datetime @inputDate="setDate" @inputTime="setTime"></appointment-form-datetime>
            <appointment-form-comment @inputComment="setComment"></appointment-form-comment>
            <appointment-form-preview :type="type" :date="date" :time="time" :comment="comment"></appointment-form-preview>
            <button v-on:click="back()" :disabled="selectedTemplate == 0"><</button><button v-on:click="forwards()"  :disabled="selectedTemplate == 3">></button>
        </div>`,
    props: [],
    data() {
        return {
            selectedTemplate: 0,
            type: "",
            date: "",
            time: "",
            comment: "",
        }
    },
    methods: {
        back() {
            if(this.selectedTemplate > 0) {
                this.selectedTemplate--;
                console.log(this.selectedTemplate);
            }
        },
        forwards() {
            if(this.selectedTemplate < 3) {
                this.selectedTemplate++;
            }
        },
        setType(type) {
            switch(type) {
                case 'Ost': this.type = "Osteopati"; break;
                case 'Aku': this.type = "Akupuntur"; break;
                case 'Kos': this.type = "Kostholdsveiledning"; break;
                case 'Fys': this.type = "Fysiolab"; break;
                default: this.type = "Undefined";
            }
            this.forwards();
        },
        setDate(date) {
            this.date = date;
        },
        setTime(time) {
            this.time = time;
        },
        setComment(comment) {
            this.comment = comment;
        }
    }
});
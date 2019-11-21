export default Vue.component('make-appointment', {
    template: `
        <div>
            <button>Avbryt</button>
            <div :style='{display: (currentSection == 0 ? "block" : "none")}'>
                <appointment-form-type @selected="setType"></appointment-form-type>
            </div>
            <div :style='{display: (currentSection == 1 ? "block" : "none")}'>
                <appointment-form-datetime @inputDate="setDate" @inputTime="setTime" @enter="enter"></appointment-form-datetime>
            </div>
            <div :style='{display: (currentSection == 2 ? "block" : "none")}'>
                <appointment-form-comment @inputComment="setComment" @key="enter" @enter="enter"></appointment-form-comment>
            </div>
            <div :style='{display: (currentSection == 3 ? "block" : "none")}'>
                <appointment-form-preview :type="type" :date="date" :time="time" :comment="comment"></appointment-form-preview>
            </div>
            <button @click="back" :style='{display: (currentSection > 0 ? "inline-block" : "none")}'> < </button>
            <button @click="forward" :style='{display: (currentSection < 3 ? "inline-block" : "none")}'> > </button>
        </div>`,
    props: [],
    data() {
        return {
            currentSection: 0,
            type: "",
            date: "",
            time: "",
            comment: "",
        }
    },
    methods: {
        back() {
            if(this.currentSection > 0){
                this.currentSection--;
            }
        },
        forward() {
            if(this.currentSection < 3){
                this.currentSection++;
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
            this.forward(); //Move forward on type selection
        },
        setDate(date) {
            this.date = date;
        },
        setTime(time) {
            this.time = time;
            this.forward(); //Move forward on time selection
        },
        setComment(comment) {
            this.comment = comment;
        },
        enter(){
            this.forward();
        }
    }
});
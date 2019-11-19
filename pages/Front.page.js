const FrontPage = {
    template: `
        <div>
            <div><router-link to=login>Logg inn</router-link></div>
            <div class="heroImage">
                <h1>{{title}}</h1>
                <button>Bestill time</button>
            </div>
            <div class="container">
            <h1>Hello fuckers</h1>
            </div>
        </div>
        
        
        `,
    data() {
        return {
            title: "Velkommen til Studentklinikken"
        }
    }
}

export default FrontPage;
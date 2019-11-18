const FrontPage = {
    template: `
        <div>
            <h1>{{title}}</h1>
            <router-link to=login>Logg inn</router-link>
        </div>`,
    data() {
        return {
            title: "Velkommen til Studentklinikken"
        }
    }
}

export default FrontPage;
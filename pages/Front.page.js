const FrontPage = {
    template: `
        <div>
            <div><router-link to=login>Logg inn</router-link></div>
            <div class="heroImage">
                <h1>{{title}}</h1>
                <button class="button button-dark">Bestill time</button>
            </div>
            <div class="flex-container">
                <button class="button button-dark">Tjenester</button>
                <button class="button button-dark">Åpningstider</button>
                <button class="button button-dark">Priser</button>
                <button class="button button-dark">Adresse</button>
            </div>
            <div class="map"></div>
        </div>
        
        
        `,
    data() {
        return {
            title: "Velkommen til Studentklinikken"
        }
    }
}

export default FrontPage;
const FrontPage = {
    template: `
        <div>
            <div><router-link to=login>Logg inn</router-link></div>
            <header>
                <div class="heroImage">
                <h1>{{title}}</h1>
                <a class="btn" href="#">Bestill time</a>
                </div>
            </header>
                <button class="button button-dark">Bestill time</button>
            </div>
            <div class="flex-container">
                <button class="button button-dark">Tjenester</button>
                <button class="button button-dark">Åpningstider</button>
                <button class="button button-dark">Priser</button>
                <button class="button button-dark">Adresse</button>
            <div class="container">
                <div class="services"><h1>Tjenester</h1></div>
                <div class="hours"><h1>Åpningstider</h1></div>
                <div class="prices"><h1>Priser</h1></div>
                <div class="adress"><h1>Adresse</h1></div>
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
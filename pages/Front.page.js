const FrontPage = {
    template: `
        <div>
            <div><router-link to=login>Logg inn</router-link></div>
            <header class="front-page-header">
                <div class="hero-image">
                <h1>{{title}}</h1>
                <a class="btn" href="#">Bestill time</a>
                </div>
            </header>
        
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
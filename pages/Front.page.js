const FrontPage = {
    template: `
        <div>
            <div><router-link to=login>Logg inn</router-link></div>
            <header class="front-page-header">
                <div class="hero-image">
                <h1>Du kan forvente behandling av høy kvalitet, <br>hvor ditt behov står sentralt.</h1>
                <a class="btn" href="#">Bestill time</a>
                </div>
            </header>
                <button class="button button-dark">Bestill time</button>
            </div>
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
            title: "Du kan forvente behandling av høy kvalitet,hvor ditt behov står sentralt."
        }
    }
}

export default FrontPage;
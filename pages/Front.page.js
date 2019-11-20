const FrontPage = {
    template: `
        <div>
            <div><router-link to=login>Logg inn</router-link></div>
            <div class="heroImage">
                <h1>{{title}}</h1>
<<<<<<< HEAD
                <button class="button button-dark">Bestill time</button>
=======
                <a href="#">Bestill time</a>
>>>>>>> c919061f5d8f3a44c8de250b2456ad438ed5f4f9
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
            title: "Velkommen til Studentklinikken"
        }
    }
}

export default FrontPage;
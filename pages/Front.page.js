const FrontPage = {
    template: `
        <div>
            <div><router-link to=login>Logg inn</router-link></div>
            <header>
                <div class="heroImage">
                <h1>{{title}}</h1>
<<<<<<< HEAD
                <a class="btn" href="#">Bestill time</a>
                </div>
            </header>
        
=======
                <button class="button button-dark">Bestill time</button>
            </div>
>>>>>>> d79a69ab4dfb706ad287363eed59440835eaeb9b
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
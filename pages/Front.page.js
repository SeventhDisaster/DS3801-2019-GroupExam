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
        
            <section class="section-features">
                <p class="intro">Vi behandler akutte og langvarige plager / ubehag, men kan også hjelpe til med forebyggende tiltak. Du kan forvente en individuell samtale, undersøkelse, behandling og råd rettet mot dine behov.</p>
                <div class="services"><h2>Tjenester</h2></div>
                <div class="hours"><h2>Åpningstider</h2></div>
                <div class="prices"><h2>Priser</h2></div>
                <div class="adress"><h2>Adresse</h2></div>
            </section>
            
                
            
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
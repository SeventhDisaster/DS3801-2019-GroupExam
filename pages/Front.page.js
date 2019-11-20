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
            <div class="row">
                <p class="intro">Vi behandler akutte og langvarige plager / ubehag, men kan også hjelpe til med forebyggende tiltak. Du kan forvente en individuell samtale, undersøkelse, behandling og råd rettet mot dine behov.</p>
                <p class="intro">Studentene har selv ansvar for konsultasjonene, men har alltid en erfaren veileder tilgjengelig..</p>
                <p class="intro">Du trenger ikke henvisning fra lege.</p>
            </div>
            <div class="row">    
                <h2 class="intro">Tjenester</h2>
            </div>
            <div class="group section row">    
                <div class="col span_1_of_4">
                    <h3>Osteopati</h3>
                    <p>Akupunktur er en persontilpasset behandling der diagnostikk, behandling og oppfølging er skreddersydd for hver pasient med sine unike særtrekk og behov under hvert trinn av behandlingen.</p>
                </div>
                <div class="col span_1_of_4">
                    <h3>Akupunktur</h3>
                    <p>En osteopat undersøker og behandler muskel- og skjelettsmerter med manuelle behandlingsteknikker på benk. Terapeuten fokuserer på å avdekke funksjons- og bevegelsesforstyrrelser som kan være med på å skape smerte. Behandlingen egner seg for pasienter i alle aldere.</p>
                </div>
                <div class="col span_1_of_4">
                    <h3>Kostholdveiledning</h3>
                    <p>Veiledning passer ypperlig for deg som ønsker å forebygge sykdom, gå ned eller opp i vekt, spise optimalt med tanke på trening og prestasjon, har allergier eller intoleranser som krever tilpassing av kosten eller ønsker å ha et generelt sunt kosthold.</p>
                </div>
                <div class="col span_1_of_4">
                    <h3>Fysiologisk testlab</h3>
                    <p>Testing av egen helse er samtidig både motiverende og gir verdifull informasjon for mange andre. Derfor tilbyr vi tester til deg som ønsker å teste din fysiske tilstand og prestasjonsevne.</p>
                </div>
            </div>
        </section>
        <section class="opening-hours">
            <div class="group section row">
                <div class="col span_1_of_2">
                    <img src="resources/group-satisfied-students-showing-thumbs-up_1098-2827.jpg">
                </div>
                <div class="col span_1_of_2">
                    <h2 class="intro">Priser</h2>
                    <p>HK studenter får 50% rabatt hos oss!</p>
                </div>
            </div>   
            <div class="row">    
                <h2 class="intro">Adresse</h2>
            </div>
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

/*  <div class="row">    
                <h2 class="intro">Åpningstider</h2>
            </div>
            <div class="row">    
                <h2 class="intro">Priser</h2>
            </div>
            <div class="row">    
                <h2 class="intro">Adresse</h2>
            </div> */
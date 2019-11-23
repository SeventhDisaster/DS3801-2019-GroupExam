//to do    make background grey when burger menu is clicked
// make background unscrollable when burger menu is on
// make burger disappear after clickin on a link
// try to make menu follow only when scrolling up

//features en fullverdig konsultasjon
// ingen ventetid
//


const FrontPage = {
    template: `
    <div>
        <!--<nav> 
            <div class="logo">
                <h4>LOGO</h4>
            </div>
            <ul class="nav-links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#tjenester">Tjenester</a>
                </li>
                <li>
                    <a href="#priser">Priser</a>
                </li>
                <li>
                    <a href="#adresse">Addresse</a>
                </li>
                <li>
                    <a href="#">Sign up</a>
                </li>
                <li>
                    <div><router-link to=login>Logg inn</router-link></div>
                </li>
            </ul>
            <div class="burger">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
        </nav> -->
        
        <header class="front-page-header">
        <nav> 
            <div class="logo-pic">
                <img class="logo" src="./resources/KristianiaUniversityCollege_hvit_rgb.png">
            </div>
            <ul class="nav-links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#tjenester">Tjenester</a>
                </li>
                <li>
                    <a href="#priser">Priser</a>
                </li>
                <li>
                    <a href="#adresse">Addresse</a>
                </li>
                <li>
                    <a href="#">Sign up</a>
                </li>
                <li>
                    <div><router-link to=login>Logg inn</router-link></div>
                </li>
            </ul>
            <div class="burger">
                <div class="line-1"></div>
                <div class="line-2"></div>
                <div class="line-3"></div>
            </div>
        </nav>
            <div class="hero-image">
                <h1>Du kan forvente behandling av høy kvalitet, <br>hvor ditt behov står sentralt.</h1>
                <router-link class="btn" to=booking>Bestill time</router-link>
                
            </div>
        </header>

        <section class="section-features">
            <div class="row">
                <p class="intro">Vi behandler akutte og langvarige plager / ubehag, men kan også hjelpe til med forebyggende tiltak. Du kan forvente en individuell samtale, undersøkelse, behandling og råd rettet mot dine behov.</p>
                <p class="intro">Studentene har selv ansvar for konsultasjonene, men har alltid en erfaren veileder tilgjengelig..</p>
                <p class="intro">Du trenger ikke henvisning fra lege.</p>
            </div>
            <div class="row">    
                <h2 id="tjenester" class="intro">Tjenester</h2>
            </div>
            <div class="group section row">    
                <div class="col span_1_of_4 test">
                <h3 class="intro">Osteopat</h3>
                    <p class="feature-p">En osteopat undersøker og behandler muskel- og skjelettsmerter med manuelle behandlingsteknikker på benk. Terapeuten fokuserer på å avdekke funksjons- og bevegelsesforstyrrelser som kan være med på å skape smerte. </p>
                    
                </div>
                <div class="col span_1_of_4 test">
                    <h3 class="intro">Akupunktur</h3>
                    <p class="feature-p">Akupunktur er en persontilpasset behandling der diagnostikk, behandling og oppfølging er skreddersydd for hver pasient med sine unike særtrekk og behov under hvert trinn av behandlingen.</p>
                </div>
                <div class="col span_1_of_4 box">
                    <h3 class="intro">Kostholdveiledning</h3>
                    <p class="feature-p">Veiledning passer ypperlig for deg som ønsker å forebygge sykdom, gå ned eller opp i vekt, spise optimalt med tanke på trening og prestasjon, har allergier eller intoleranser som krever tilpassing av kosten.</p>
                </div>
                <div class="col span_1_of_4 box">
                    <h3 class="intro">Fysiologisk testlab</h3>
                    <p class="feature-p">Testing av egen helse er samtidig både motiverende og gir verdifull informasjon for mange andre. Derfor tilbyr vi tester til deg som ønsker å teste din fysiske tilstand og prestasjonsevne.</p>
                </div>
            </div>
        </section>
        <section id="priser" class="opening-hours">
            <div class="group section row">
                <div class="col span_1_of_2 box">
                    <img class="priser-img" src="resources/group-satisfied-students-showing-thumbs-up_1098-2827.jpg">
                </div>
                <div class="col span_1_of_2">
                    <h2 class="intro">Priser</h2>
                    <p class="hours-p">HK studenter får 50% rabatt hos oss!</p>
                </div>
            </div>   
        </section>
        <section class="last-class">
            <div class="row">    
                <h2 id="adresse" class="intro">Adresse</h2>
                <div class="group section row">
                    <div class="col span_1_of_2">
                        <p class="intro"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2000.261076351581!2d10.74266541566557!3d59.9112143712732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46416e88371902fb%3A0x4812bb829faca24d!2sH%C3%B8yskolen%20Kristiania%20%7C%20Campus%20Kvadraturen!5e0!3m2!1sno!2sno!4v1574352027972!5m2!1sno!2sno" 
                        width="400" height="300" frameborder="0" style="border:0;" allowfullscreen=""></iframe></p>
                    </div>
                    <!-- lag stengt åpen knappen -->
                    <div class="col span_1_of_2">
                        <h3>Oslo Kvadraturen</h3>
                        <p>Prinsens gate 9</p>
                        <p>0153 Oslo</p>
                        <p>Henvend deg alltid i Besøksresepsjonen før konsultasjonen.</p>
                        <p>Klinikken med venterom ligger i 3. etg. i samme bygg. Vi har heis.</p>
                        <p>Mandag – torsdag 07.30 – 19.00</p>
                        <p>Fredag 08.00 – 16.00</p>

                    </div>
                </div>
            </div>
        </section>
        <div class="map">
            <a href="#">Tjenester</a>
            <a href="#">Kontakt</a>
            <a href="#">Pasientopplysninger</a>
        </div>
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
           <p class="feature-p">Akupunktur er en persontilpasset behandling der diagnostikk, behandling og oppfølging er skreddersydd for hver pasient med sine unike særtrekk og behov under hvert trinn av behandlingen.</p>
            </div> */

            
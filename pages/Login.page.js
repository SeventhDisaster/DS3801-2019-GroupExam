const LoginPage = {
    template: `
        <div>
            <div class="group section">
                <div class="col-margin span_1_of_2 picture-half">
                    <div class="login-picture">
                        <div class="signup-logo">
                            <img class="signup-logo-kristiania" src="./resources/KristianiaUniversityCollege_hvit_rgb.png">
                            <h2>Studentklinikken</h2>
                        </div> 
                    </div>
                </div>
                <div class="col-margin span_1_of_2 form-half">
                        <div class="signup-form">
                            <user-login-form></user-login-form>
                            <router-link to=register class="register-login">Registrer deg</router-link>
                            <p>Eksempel Bruker: brukermann@epost.no - Test123</p>
                            <p>Eksempel Ansatt 1: ansatt1@clinic.no - Osteopop</p>
                        </div>
                </div>  
            </div>
        </div>`
};

export default LoginPage;

/*
<div class="group section">
                <div class="col-margin span_1_of_2 picture-half">
                    <div class="signup-picture">
                        <div class="signup-logo">
                            <img class="signup-logo-kristiania" src="./resources/KristianiaUniversityCollege_hvit_rgb.png">
                            <h2>Studentklinikken</h2>
                        </div>
                    </div>
                </div>
                <div class="col-margin span_1_of_2 form-half">
                    <div class="signup-form">
                        <user-register-form></user-register-form>
                        <router-link to=login class="signup-login">Jeg er allerede bruker - Logg Inn</router-link>
                    </div>
                </div>
            </div>
*/
const RegisterPage = {
    template: `
        <div>
            <div class="group section">
                <div class="col span_1_of_2 picture-half">
                    <div class="signup-picture">
                        <div class="signup-logo">
                            <img class="signup-logo-kristiania" src="./resources/KristianiaUniversityCollege_hvit_rgb.png">
                            <h2>Studentklinikken</h2>
                        </div>
                    </div>
                </div>
                <div class="col span_1_of_2 form-half">
                    <div class="signup-form">
                        <user-register-form></user-register-form>
                        <router-link to=login class="signup-login">Jeg er allerede bruker - Logg Inn</router-link>
                    </div>
                </div>
            </div>

        </div>`
};

export default RegisterPage;
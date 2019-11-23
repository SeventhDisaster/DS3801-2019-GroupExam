const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll(".nav-links li");
    //nav toggle
    burger.addEventListener("click", () => {
        nav.classList.toggle("nav-active");
    
        //animated links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 0.3 }s`;
            }
        });
        //burger toggle
        burger.classList.toggle("toggle");
    });
  
}


document.querySelector(".btn").addEventListener("click", () => {
    console.log("I love u");
});

window.addEventListener("click", e => {
    console.log(e);
});
navSlide();

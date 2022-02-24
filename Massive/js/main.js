window.onscroll = function () {
    
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("headerFixed").style.transform = "translate(-50%,0)";
    } else {
        document.getElementById("headerFixed").style.transform = "translate(-50%,-100%)";
    }

    var fadeLeft = document.querySelector("#left");
    var fadeUp = document.querySelector("#up");
    var fadeRight = document.querySelector("#right");
    if(document.body.scrollTop > 550 || document.documentElement.scrollTop > 550){
        fadeLeft.className = "about__content animate__animated animate__fadeInLeft";
        fadeUp.className = "about__content animate__animated animate__fadeInUp";
        fadeRight.className = "about__content animate__animated animate__fadeInRight";
    }
};
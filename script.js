const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function animation() {
    var elemC = document.querySelector("#allelem")
    var fixed = document.querySelector("#fixedimg")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    const elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
            fixed.style.backgroundPosition = "center"
            fixed.style.backgroundSize = "cover"
        })
    })
}

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3.5,
        spaceBetween: 50,
        freeMode: true,
    });
}

// responsive navbar
function menuAnimation() {
    var menu = document.querySelector('nav h3');
var nav = document.querySelector("#fullscr-nav");
var logo = document.querySelector('nav img');
var flag = 0;

menu.addEventListener("click", function(){
    if(flag == 0){
        logo.style.opacity = 0;
        nav.style.top = 0;
        flag = 1
    }
    else{
        logo.style.opacity = 1
        nav.style.top = "-100%"
        flag = 0
    }
})

};

// loader
var loader = document.querySelector("#loader");
setTimeout(() => {
    loader.style.top = "-100%";
}, 3000);



swiper()
animation()
menuAnimation();



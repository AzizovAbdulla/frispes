let btn = document.querySelector(".header-general__log-sign-in")
btn.addEventListener("click", () => {
document.querySelector(".header-general__modal").style.display = "block"
})

let btnClose = document.querySelector(".header-general__modal__block__square__xmark")
btnClose.addEventListener("click", () => {
    document.querySelector(".header-general__modal").style.display = "none"
})






const swiper = new Swiper(".mySwiper", {
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },


});
//
// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next2",
//         prevEl: ".swiper-button-prev2",
//     },
// });

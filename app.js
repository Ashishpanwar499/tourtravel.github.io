let searchbtn=document.querySelector("#search-btn");
let searchbar=document.querySelector(".search-bar-container");
let formbtn=document.querySelector("#login-btn");
let loginform=document.querySelector(".login-form-container");
let formclose=document.querySelector("#form-close");
let menu=document.querySelector("#menu-bar");
let navbar=document.querySelector(".navbar");
let vidbtn=document.querySelectorAll(".vid-btn");
console.log(menu,navbar);
window.onscroll=()=>{
    searchbtn.classList.remove("fa-times");
    searchbar.classList.remove("active");
     loginform.classList.remove("active");
}
searchbtn.addEventListener("click",()=>{
    searchbar.classList.toggle("active");
})

formbtn.addEventListener("click",()=>{
    loginform.classList.toggle("active");
})
formclose.addEventListener("click",()=>{
    loginform.classList.remove("active");
})
menu.addEventListener("click", () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("act");
   
});




vidbtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
   document.querySelector('.controls .active').classList.remove('active');
   btn.classList.add('active');
   let src=btn.getAttribute('data-src');
   document.querySelector("#video-slider").src=src;
    });
});
var swiper=new Swiper(".review-slider",{
    spaceBetween:20,
       loop:true,
       autoplay:{
        delay:2500,
        disableOnInteraction:false
       },
       breakpoints:{
        640:{
            slidesPerView:1,
       },
       768:{
        slidesPerView:2,
       },
       1024:{
        slidesPerView:3,
       },
    },
})

var swiper=new Swiper(".brand-slider",{
    spaceBetween:20,
       loop:true,
       autoplay:{
        delay:2500,
        disableOnInteraction:false
       },
       breakpoints:{
        450:{
            slidesPerView:1,
       },
       768:{
        slidesPerView:2,
       },
       991:{
        slidesPerView:3,
       },
       1024:{
        slidesPerView:4
        ,
       },
    },
})

//Scroll Reveal 
const sr = ScrollReveal({
    origin: "top", 
    distance: '60px', 
    duration: 1500, 
    delay: 100, 
})

sr.reveal(`.botones, #content2, #content3, #projects, #certif`)
sr.reveal(`#content1, #aboutM`,{origin: "left"})
sr.reveal(`#content4, #contact`, {origin: "right"}, {reset: true})



//Swipper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
   
  });


/*
const buttonbg = document.getElementById('colorbg'); 

buttonbg.addEventListener('click', function(){
  document.body.style.backgroundColor = #ffffff; 
});

function changeBackground(color) {
   document.body.style.background = color;
}

window.addEventListener("load",function() { changeBackground('red') });

*//*
let paraf = document.getElementsById("personalCard");
function changeBgColor() {
  document.body.style.backgroundImage = "radial-gradient(circle at 50% -20.71%, #E5E5BE 0, #02AAB0 50%, #003973 100%)";
  paraf.style.color = "#ffffff";
}*/

let toggle=document.getElementById("toggle"); 
let label_toggle=document.getElementById("label_toggle"); 

toggle.addEventListener('change', (event)=>{
  let checked=event.target.checked; 
  document.body.classList.toggle('dark'); 

})
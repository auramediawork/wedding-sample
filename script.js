const envelope=document.querySelector(".envelope-container");

envelope.addEventListener("click",()=>{
document.querySelector(".envelope").classList.add("open");

setTimeout(()=>{
envelope.style.display="none";
document.getElementById("music").play();
},1200);
});

/* SCROLL REVEAL */
const sections=document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
if(sec.getBoundingClientRect().top<window.innerHeight-100){
sec.style.opacity="1";
sec.style.transform="translateY(0)";
}
});
});


/* OPEN ENVELOPE + MUSIC */
const env=document.getElementById("envelope");

env.addEventListener("click",()=>{
document.querySelector(".envelope").classList.add("open");

setTimeout(()=>{
env.style.display="none";
document.getElementById("music").play();
},1000);
});

/* SCROLL REVEAL ANIMATION */
const sections=document.querySelectorAll(".section");

window.addEventListener("scroll",()=>{
sections.forEach(sec=>{
if(sec.getBoundingClientRect().top < window.innerHeight-100){
sec.classList.add("show");
}
});
});

/* GOLD PARTICLES BACKGROUND */
for(let i=0;i<25;i++){
let p=document.createElement("div");
p.className="particle";
p.style.left=Math.random()*100+"%";
p.style.animationDuration=(5+Math.random()*5)+"s";
document.body.appendChild(p);
}

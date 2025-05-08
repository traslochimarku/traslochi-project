const menuBtn = document.querySelector(".mobile-btn");
const exitBtn = document.querySelector(".mob-exit-btn");

/* Links variable initialization below */
const serviziLink = document.getElementById("serviziMobLink");
const contattiLink = document.getElementById("contattiMobLink");
const chiSiamoLink = document.getElementById("chiSiamoMobLink");
const blogLink = document.getElementById("blogMobLink");
/* GSAP.timeline below */

let t1 = gsap.timeline({ paused: true });
t1.to(".mobile-menu", { opacity: 1, duration: 1, top: 0 });

menuBtn.addEventListener("click", () => {
  t1.play();
});

exitBtn.addEventListener("click", () => {
  t1.reverse();
});

serviziLink.addEventListener("click", () => {
  t1.reverse();
});

chiSiamoLink.addEventListener("click", () => {
  t1.reverse();
});

blogLink.addEventListener("click", () => {
  t1.reverse();
});

contattiLink.addEventListener("click", () => {
  t1.reverse();
});

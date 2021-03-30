const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const section = document.querySelector(".sectionCarousel");

const i20 = document.querySelector(".i20");
const i202 = document.querySelector(".i20_2");
const i20_logo = document.querySelector(".logo");
const navbar = document.querySelector("#navbar");
//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 8000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 500;
});

//Text Animation
// const textAnimi20 = TweenMax.fromTo(
//   i20,
//   5,
//   { transform: "translateY(200px)" },
//   { transform: "translateY(0px)" },
//   { ease: "Strong.easeInOut" }
// );
// const textAnimi202 = TweenMax.fromTo(
//   i202,
//   5,
//   { transform: "translateY(200px)" },
//   { transform: "translateY(0px)" },
//   { ease: "Strong.easeInOut" }
// );
// const logoAnimi20 = TweenMax.fromTo(
//   i20_logo,
//   5,
//   { transform: "translateY(200px)", opacity: 0 },
//   { transform: "translateY(0px)", opacity: 1 },
//   { ease: "Strong.easeInOut" }
// );
// const navbar_anim = TweenMax.fromTo(
//   navbar,
//   5,
//   { transform: "translateY(200px)" },
//   { transform: "translateY(0px)" },
//   { ease: "Strong.easeInOut" }
// );
// ___________________________________________________
// let title_incand = new ScrollMagic.Scene({
//   duration: 1000,
//   triggerElement: intro,
//   triggerHook: 0,
//   offset: 6000,
// })
//   .setTween(textAnimi20)
//   .addTo(controller);

// let subtitle_march2020 = new ScrollMagic.Scene({
//   duration: 1000,
//   triggerElement: intro,
//   triggerHook: 0,
//   offset: 6000,
// })
//   .setTween(textAnimi202)
//   .addTo(controller);

// let logo_incand = new ScrollMagic.Scene({
//   duration: 1000,
//   triggerElement: intro,
//   triggerHook: 0,
//   offset: 6000,
// })
//   .setTween(logoAnimi20)
//   .addTo(controller);

// let navbar_sc = new ScrollMagic.Scene({
//   duration: 1000,
//   triggerElement: intro,
//   triggerHook: 0,
//   offset: 5000,
// })
//   .setTween(navbar_anim)
//   .addTo(controller);
//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 33.3);

let sectionScene = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: section,
  triggerHook: 0,
})
  .setPin(section)
  .addTo(controller);

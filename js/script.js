var main1 = document.getElementById("main1");
var main2 = document.getElementById("main2");
var main3 = document.getElementById("main3");
var btnSearch = document.getElementById("btnSearch");

btnSearch.addEventListener("click", function(){
    main1.classList.add("hiddenMainAll");
    main3.classList.add("hiddenMainAll");
    main2.classList.remove("hiddenMainAll");
    main2.classList.add("closesmoth");
});

var BackToSearch = document.getElementById("BackToSearch");
BackToSearch.addEventListener("click", function(){
    main1.classList.remove("hiddenMainAll");
    main3.classList.add("hiddenMainAll");
    main2.classList.add("hiddenMainAll");
    main1.classList.add("closesmoth");
});

var btnAddNew1 = document.getElementById("btnAddNew1");
btnAddNew1.addEventListener("click", function(){
    main3.classList.remove("hiddenMainAll");
    main1.classList.add("hiddenMainAll");
    main2.classList.add("hiddenMainAll");
    main3.classList.add("closesmoth");
});
var btnAddNew2 = document.getElementById("btnAddNew2");
btnAddNew2.addEventListener("click", function(){
    main3.classList.remove("hiddenMainAll");
    main1.classList.add("hiddenMainAll");
    main2.classList.add("hiddenMainAll");
    main3.classList.add("closesmoth");
});

// new 
const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
//END SECTION



//SCROLLMAGIC
var controller = new ScrollMagic.Controller();

// Scenes
var scene = new ScrollMagic.Scene({
    // time the video in ms
    duration: 2480,
    triggerElemnt: intro,
    triggerHook: 0
})
//   .addIndicators()
  .setPin(intro)
  .addTo(controller); 


//Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos/1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    console.log(scrollpos, delay);

    video.currentTime = delay;
}, 33.3);







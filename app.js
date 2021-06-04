const time = gsap.timeline({default:{ ease: "power1.out" }})
//gsap.to(".text", {x: 100, duration: 1, delay: 1});      //wait 1 second
//gsap.to(".intro", {opacity: 0, duration: 1, delay: 2}); //wait 2 second

gsap.from(".text-intro",{
    duration: 0,
    opacity: 1,
    delay:0.5,
});

gsap.to(".text-intro",{
    y: "-100%",
    duration: 2,
    ease: "power1.out",
    opacity: 0,
});
gsap.to(".intro",{
    y: "-100%",
    duration: 4,
    ease: "power1.out",
    delay: 2,
});
gsap.to(".slider",{
    y:"-100%",
    duration: 4,
    ease: "power1.out",
    delay: 1.5,
})
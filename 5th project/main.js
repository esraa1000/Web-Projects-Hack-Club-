var card = document.getElementById('activator');
var tl = gsap.timeline({defaults: {ease: "power2.inOut"}});

var toggle = false;

tl.to(".activator",{
    background: "#805ad5",
    'borderRadius': '5em 0 0 5em'
});

tl.to("nav",{
    'clipPath': 'ellipse(100% 100% at 50% 50%)'
}, "-=.5");
tl.to("nav img",{
    opacity: 1,
    tranform: "translateX(0)",
    stagger: 0.05
}, "-=.5");
tl.pause();

card.addEventListener('click', () =>{
    toggle = !toggle;
    //ternary operator, condional operator: (condtion) ? run this code : run this code instead
    if(toggle ? tl.play() : tl.reverse());
});

// var card = document.getElementById('activator');
// var tl = gsap.timeline({defaults: {ease: "power2.inOut"}})
// //show the animation progress on the website 

// var toggle = false;

// tl.to(".activator",{
//     background: '#805ad5',
//     'borderRadius': '5em 0 0 5em'
// });
// tl.to('nav', {
//     'clipPath': 'ellipse(100% 100% at 50% 50%)'
// }, "-=.5");
// tl.to('nav img', {
//     opacity: 1,
//     transform: 'translateX(0)',
//     stagger: 0.05
// }, "-=.5");
// tl.pause();

// card.addEventListener('click', () => {
//     toggle = !toggle;
//     if(toggle ? tl.play() : tl.reverse()); //( condition ) ? run this code : run this code instead => ternary operator or condional operator
// });
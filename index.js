
// ("use strict");
const boxes = document.querySelectorAll('.box');
const options = {
    root : null, // view port
    // threshold : 0, // 0 -1 "rating of show elements"
    rootMargin : '-200px 0px -300px 0px',

};
const observer = new IntersectionObserver((entries)=>
{
    // console.log(entries);
    entries.forEach((entry)=>{
// const element = document.querySelectorAll('.slide');
// element.classList.add('animate__animated', 'animate__bounceInUp');
entry.target.classList.toggle('slide', entry.isIntersecting)
        // if(entry.isIntersecting){
        //     observer.unobserve(entry.target)
        // }
    })
} , options);

boxes.forEach(box =>{
    observer.observe(box)
})

//image slider
$("#carousel1").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1170: {
            items: 3,
        },
    },
});
$("#carousel2").owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1170: {
            items: 3,
        },
    },
});
$(".owl-carousel").owlCarousel();

// go top button
let mybutton = document.getElementById("topBtn");

if (mybutton) {
    window.onscroll = function () {
        scrollFunction();
    };
}

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

if (mybutton) {
    mybutton.onclick = function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };
}
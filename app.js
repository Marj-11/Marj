//  Loader----------------------------------
document.onreadystatechange = function() {
    var state = document.readyState;
    if (state == 'interactive') {
        document.getElementById('contents').style.visibility = 'visible';
    } else if (state == 'complete') {
        document.getElementById('interactive');
        document.getElementById('body').style.visibility = 'hidden';
        document.getElementById('contents').style.visibility = 'hidin';
    }
};
//  Time----------------------------------
const d = new Date();
const y = d.getFullYear();
document.getElementById('date').innerHTML = y;
// -----------------------------------------------------------

//  Swiper----------------------------------

var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});
// -----------------------------------------------------------

// Hamburger---and---Modal----------------------------
const burger = document.querySelector('.icon');
const modal = document.getElementById('myModal');
burger.addEventListener('click', function() {
    burger.classList.toggle('active');
    if (burger.classList.contains('active')) {
        modal.style.display = 'block';
    } else {
        modal.style.display = 'none';
    }
});

window.onclick = function(event) {
    if (event.target !== burger) {
        modal.style.display = 'none';
        burger.classList.remove('active');
    }
};

// -----------------------------------------------------------

let mainNavLinks = document.querySelectorAll('nav ul li a');
let mainSections = document.querySelectorAll('section');

window.addEventListener('scroll', (event) => {
    let fromTop = window.scrollY + 90;

    mainNavLinks.forEach((link) => {
        let section = document.querySelector(link.hash);

        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('current');
        } else {
            link.classList.remove('current');
        }
    });
});

// -----------------------------------------------------------

const nav = document.querySelector('.header');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + -50 + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);
// -----------------------------------------------------------

//------------------------------------------IntersectionObservers----------------------------------------------/

const icons = document.querySelector('#icons');

observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio !== 0) {
        entries[0].target.style.animation = `anim1 2s ${entries[0].target.dataset.delay} forwards ease-out`;
    }
});
observer.observe(icons);

//--------------------------Skills----------------------------//

const skills = document.querySelector('.skills');
let counter = 0;
observer = new IntersectionObserver((entries) => {
    if (entries[0].intersectionRatio !== 0) {
        entries[0].target.style.animation = `skills 1s ${entries[0].target.dataset.delay} forwards ease-out`;
        counter++;
        // width operation
        if (counter == 1) {
            let html = document.querySelector('.html');
            let css = document.querySelector('.css');
            let js = document.querySelector('.js');
            let vue = document.querySelector('.vue');
            let vuex = document.querySelector('.vuex');
            let photoshop = document.querySelector('.photoshop');
            let max = document.querySelector('.max');

            var i = 0;
            if (i == 0) {
                i = 1;
                let elem = document.querySelectorAll('#myBar');
                elem.forEach((e) => {
                    let width = 1;
                    let idValue = e.innerHTML;
                    let idClass;
                    e.classList[0] === 'html' ?
                        (idClass = html) :
                        e.classList[0] === 'css' ?
                        (idClass = css) :
                        e.classList[0] === 'js' ?
                        (idClass = js) :
                        e.classList[0] === 'vue' ?
                        (idClass = vue) :
                        e.classList[0] === 'vuex' ?
                        (idClass = vuex) :
                        e.classList[0] === 'photoshop' ?
                        (idClass = photoshop) :
                        (idClass = max);

                    let id = setInterval(frame, 30);

                    function frame() {
                        if (width >= idValue) {
                            clearInterval(id);
                            i = 0;
                        } else {
                            width++;
                            idClass.style.width = width + '%';
                            e.innerHTML = width + '%';
                        }
                    }
                });
            }
        }
    }
});

observer.observe(skills);

//-------------------------Projects----------------------------//

const card1 = document.querySelectorAll('.card1');
// const options = {
//     root: null,
//     threshold: 0,
//     rootMargin: '-700px 0px -150px 0px'
// };

observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.style.animation = `${entry.target.id} 2s ${entry.target.dataset.delay} forwards ease-out`;
            observer.unobserve(entry.target);
        }
    });
});

card1.forEach((card) => {
    observer.observe(card);
});

//--------------------------Contact------------------------//

const contact = document.querySelector('#contact');
// const options1 = {
//     root: null,
//     threshold: 1.0,
//     rootMargin: '-500px -500px -150px 0px'
// };

observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.style.animation = `contacty 2s ${entry.target.dataset.delay} forwards ease-out`;
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(contact);
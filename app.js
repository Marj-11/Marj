let mainNavLinks = document.querySelectorAll('nav ul li a');
let mainSections = document.querySelectorAll('section');

window.addEventListener('scroll', event => {
    let fromTop = window.scrollY + 90;

    mainNavLinks.forEach(link => {
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

//////////////////////////////////
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
//////////////////////////////////////////////////////////////////////
var canvas = document.getElementById('star-canvas');
var width = document.getElementsByClassName('outer')[0].offsetWidth;
var height = document.getElementsByClassName('outer')[0].offsetHeight;
canvas.width = width;
canvas.height = height;
var c = canvas.getContext('2d');

function Star(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;

    this.draw = function() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 22, false);
        c.closePath();
        c.fillStyle = 'white';
        c.fill();
    };

    this.update = function() {
        if (this.x + this.radius > width) {
            this.x = 0;
        } else if (this.y + this.radius < 0) {
            this.y = height;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    };
}

function ShootingStar(sx, sy) {
    this.sx = sx;
    this.sy = sy;
    this.sdx = 10;
    this.sdy = -5;
    this.radius = 2;

    this.draw = function() {
        c.beginPath();
        c.moveTo(this.sx, this.sy);
        c.lineTo(this.sx + 50, this.sy + 10);
        c.strokeStyle = 'rgba(255,255,255,0.5)';
        c.stroke();
    };

    this.update = function() {
        if (this.sx + this.radius > width) {} else if (this.sy + this.radius > height) {} else {
            this.sx += 50;
            this.sy += 10;

            this.draw();
        }
    };
}

var starsArray = [];
var shootingStarsArray = [];

for (let i = 0; i < width / 10; i++) {
    var x = Math.random() * width;
    var y = Math.random() * height;
    var dy = -Math.random() / 9;
    var dx = -dy * 5;
    var radius = Math.random() * 2;

    starsArray.push(new Star(x, y, dx, dy, radius));
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, width, height);
    for (var i = 0; i < starsArray.length; i++) {
        starsArray[i].update();
    }
    for (var i = 0; i < shootingStarsArray.length; i++) {
        shootingStarsArray[i].update();
    }
}

animate();

var int = setInterval(function() {
    shootingStarsArray = [];
    var sx = Math.random() * (width / 2);
    var sy = Math.floor(Math.random() * (height / 2));
    shootingStarsArray.push(new ShootingStar(sx, sy));
}, 5000);

//------------------------------------------IntersectionObservers----------------------------------------------/

const icons = document.querySelector('#icons');

observer = new IntersectionObserver(entries => {
    if (entries[0].intersectionRatio !== 0) {
        entries[0].target.style.animation = `anim1 2s ${entries[0].target.dataset.delay} forwards ease-out`;
    }
});
observer.observe(icons);

//--------------------------Skills----------------------------//

const skills = document.querySelector('.skills');
let counter = 0;
observer = new IntersectionObserver(entries => {
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
                elem.forEach(e => {
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
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.style.animation = `${entry.target.id} 2s ${entry.target.dataset.delay} forwards ease-out`;
            observer.unobserve(entry.target);
        }
    });
});

card1.forEach(card => {
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
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            console.log('hi');

            entry.target.style.animation = `contacty 2s ${entry.target.dataset.delay} forwards ease-out`;
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(contact);
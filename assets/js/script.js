//  hamburger menu
const hamBtn = document.querySelector('.hamburger');
const navBtn = document.querySelector('nav ul');
const links = document.querySelectorAll('.scroll');
hamBtn.addEventListener('click', function(){
	   hamBtn.classList.toggle('active');
	   navBtn.classList.toggle('active');
});

// navbar background color on scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { // Adjust this value based on when you want the color to change
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

links.forEach((el) =>{
    el.addEventListener('click', function(){
          hamBtn.classList.remove('active');
          navBtn.classList.remove('active');
    });
});



// typed Effect
   const typedSpan = document.getElementById("typed")
  const totype = ["Front-End", "Web Design", "Blogger"]

const delayTyping_char = 200;
const delayErasing_text = 150;
const delayTyping_text = 3000;

let totypeIndex = 0;
let charIndex = 0;

function typeText() {
   if (charIndex < totype[totypeIndex].length) {
      typedSpan.textContent += totype[totypeIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, delayTyping_char);
   }
   else {
      setTimeout(eraseText, delayTyping_text);
   }
}

function eraseText() {
   if (charIndex > 0) {
      typedSpan.textContent = totype[totypeIndex].substring(0, charIndex-1);
      charIndex = charIndex-1;
      setTimeout(eraseText, delayErasing_text);
   }
   else {
      totypeIndex++;

      if (totypeIndex >= totype.length)
         totypeIndex = 0;
         setTimeout(typeText, delayTyping_text);
   }
}

window.onload = function() {
   if (totype[totypeIndex].length) setTimeout(typeText, delayTyping_text);
} 

// Smooth Scroll
(function () {
    const smoothScroll = function (targetEl, duration) {
        // const headerElHeight =  document.querySelector('header').clientHeight;
        const headerElHeight =  document.querySelector('header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = function(t,b,c,d) {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = function(currentTime){
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0,run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);

    };
      
        const scrollTo = function () {
        const links = document.querySelectorAll('.scroll');
        links.forEach(each => {
            each.addEventListener('click', function (e) {
                const currentTarget = this.getAttribute('href');
                smoothScroll(currentTarget, 1000);
            });
        });
    };
    scrollTo();
}());

// Gallery
const images = [
    {
        src: 'assets/images/gallery/1.jpg',
        text: 'my picture'                                                         
     },  
     {
        src: 'assets/images/gallery/2.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'                                                         
     },  
     {
        src: 'assets/images/gallery/3.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'                                                         
     }, 
     {
        src: 'assets/images/gallery/4.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'                                                         
     },  
     {
        src: 'assets/images/gallery/5.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'                                                         
     },
      {
        src: 'assets/images/gallery/4.jpg',
        text: 'Lorem ipsum dolor sit amet elit.'                                                         
     }
];

let currentIndex = 0;
const openModal = document.querySelectorAll('.gallery-items');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text');

for(let i = 0; i < openModal.length; i++){
     openModal[i].addEventListener('click', function(){
          modalImage.src = images[i].src;
          console.log(modalImage);
          modalText.innerText = images[i].text; 
          modal.style.display = 'block';
     });
};
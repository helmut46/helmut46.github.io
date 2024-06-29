//  hamburger menu
const hamBtn = document.querySelector('.hamburger');
const navBtn = document.querySelector('nav ul');
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

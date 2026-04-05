import './src/cssReset.css';
import './src/style.css';



// import javascriptLogo from './javascript.svg'
import { initNavbar } from './src/components/navbar.js';
import { initFooter } from './src/components/footer.js';

initNavbar();
initFooter();

const navButton = document.querySelector('.hb-button');
const drawer = document.querySelector('.drawer');

navButton.addEventListener('click', () => {
    drawer.classList.toggle('open');
    drawer.toggleAttribute('aria-expanded');
    if(navButton.getAttribute('aria-expanded') === "false"){
        navButton.setAttribute('aria-expanded', true);
    }
    else {
        navButton.setAttribute('aria-expanded', false);
    }
})





const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      // optionally unobserve after animation triggers
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1 // fire when 10% of element is visible
});

// attach to all elements you want to animate
document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});
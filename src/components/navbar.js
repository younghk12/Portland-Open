import logo1 from '../assets/portlandOpenLogo.svg';

export function initNavbar() {
  document.querySelector('header').insertAdjacentHTML('afterbegin', /*html*/`
    <nav class="navbar">
        <a class="logo" href="/">
            <img src="${logo1}" alt="Portland Open Logo">
        </a>
    
        <button type="button" class="hb-button" data-target="mainMenu" aria-expanded="false">
            <svg class="hamburger" viewBox="0 0 100 100">
                <line class="line top" x1="20" x2="80" y1="35" y2="35" stroke="black" stroke-width="10" stroke-linecap="round"></line>
                <line class="line bottom" x1="20" x2="80" y1="65" y2="65" stroke="black" stroke-width="10" stroke-linecap="round"></line>
            </svg>
        </button>

        <div class="drawer">
            <ul>
                <li class="home"><a href="/">Home</a></li>
                <li><a href="/details">Details</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </nav>
  `)
}
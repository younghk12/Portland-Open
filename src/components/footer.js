import logo1 from '../assets/portlandOpenLogo.svg';

export function initFooter() {
  document.querySelector('footer').insertAdjacentHTML('afterbegin', /*html*/`
    <div class="foot">
        <div>
            <p>Portland Open Tennis Tournament</p>
            <p>Sponsored by Players Racqet Shop</p>
            <p>Website built by Henry Young</p>
        </div>
        <a href="https://www.instagram.com/portland.open/?hl=en" target="_blank">instagram
            <img src="" alt="">
        </a>
    </div>
  `)
}
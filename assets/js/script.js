const openMenuBtn = document.getElementById('open-menu-mobile')
const menuMobile = document.getElementById('menu-mobile')

function menuToggle() {
  document.body.classList.toggle('no-scroll')
  menuMobile.classList.toggle('hidden')
}

openMenuBtn.addEventListener('click', menuToggle)

// Accordion footer mobile menu
const footerMobileContent = document.getElementsByClassName('footer-mobile-nav-content'),
      footerMobileHeader = document.querySelectorAll('.footer-mobile-menu-header')

function toggleFooterMenu () {
  let itemClass = this.parentNode.className
  
  for (let i = 0; i < footerMobileContent.length; i++) {
    footerMobileContent[i].className = 'footer-mobile-nav-content footer-mobile-close'
  }

  if (itemClass === 'footer-mobile-nav-content footer-mobile-close') {
    this.parentNode.className = 'footer-mobile-nav-content footer-mobile-open'
  }
}

footerMobileHeader.forEach(e => {
  e.addEventListener('click', toggleFooterMenu)
})



const buttonMenu = document.querySelector('.nav-menu-icon')
const overlay = document.querySelector('.nav-overlay')
const menuMobile = document.querySelector('.navbar-menu-mobile-list')

buttonMenu.addEventListener('click', (e) => {
  if (overlay.style.display === 'none') {
    overlay.style.display = 'block'
    menuMobile.style.display = 'block'
  } else {
    overlay.style.display = 'none'
    menuMobile.style.display = 'none'
  }
})
overlay.addEventListener('click', (e) => {
  if (overlay.style.display === 'block') {
    overlay.style.display = 'none'
    menuMobile.style.display = 'none'
  }
})

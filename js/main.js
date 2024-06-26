'use strict'

const menuButton = document.querySelector('.menu-button')
const hamburger = document.querySelector('.menu-button__burger')
const nav = document.querySelector('.nav')
const menuNav = document.querySelector('.menu-nav')
const navItems = document.querySelectorAll('.menu-nav__item')

let showMenu = false

menuButton.addEventListener('click', toggleMenu)

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add('open')
    nav.classList.add('open')
    menuNav.classList.add('open')
    navItems.forEach((item) => item.classList.add('open'))
    document.documentElement.style.overflow = 'hidden'

    showMenu = true
  } else {
    hamburger.classList.remove('open')
    nav.classList.remove('open')
    menuNav.classList.remove('open')
    navItems.forEach((item) => item.classList.remove('open'))
    document.documentElement.style.overflow = 'auto'

    showMenu = false
  }
}

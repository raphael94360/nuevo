
class MobileMenu {
  constructor() {

    this.menuIcon = document.querySelector('.header__menu-icon');
    this.menuContent = document.querySelector('.header__menu-content');
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleTheMenu())
  }

  toggleTheMenu() {
    console.log('test');
    this.menuContent.classList.toggle('header__menu-content--is-visible')
  }
}

export default MobileMenu;

import $ from 'jquery';

class MobileMenu {
    constructor() {

        this.menuIcon = $('.navigation__menu-icon');
        this.menuIconLabel = $('.navigation__menu-icon--icon');
        this.menuContent = $('.navigation__element');
        this.button = $('.navigation--button');

        this.menuElement = $('.navigation__list--link');
        this.events();
    }

    events() {
        this.menuIcon.click(this.toggleMenu.bind(this));
        this.menuElement.click(this.hideMenu.bind(this));
    }

    toggleMenu() {
        this.menuContent.toggleClass('navigation__element--visible');
        this.button.toggleClass('navigation--button--visible');
        this.menuIconLabel.toggleClass('navigation__menu-icon--icon--click');
        this.menuIcon.toggleClass('navigation__menu-icon--activated');
    }

    hideMenu() {
        this.toggleMenu();
    }

}

export default MobileMenu;
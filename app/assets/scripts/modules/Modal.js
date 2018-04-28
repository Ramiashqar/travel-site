import $ from 'jquery';

class Modal {
    constructor() {
        this.getInTouchButton = $('.getInTouch--button');
        this.xCloseButton = $('.modal--x-close');
        this.modalToShow = $('.modal');
        //escape character
        this.events();
    }
    events() {
        this.getInTouchButton.click(this.clickToOpen.bind(this));
        this.xCloseButton.click(this.clickToClose.bind(this));
        // escapecharacter
        $(document).keyup(this.keyPressHandler.bind(this));
    }
    keyPressHandler(e) {
        if (e.keyCode == 27) {
            this.clickToClose();
        }
    }
    clickToOpen() {
        this.modalToShow.addClass("modal--is-visible");

        return false;
    }
    clickToClose() {
        this.modalToShow.removeClass("modal--is-visible");

    }
}

export default Modal;
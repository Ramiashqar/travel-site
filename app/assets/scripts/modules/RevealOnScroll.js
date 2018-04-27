import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(els, offsetValue) {
        this.itemsToReveal = els;
        this.offsetPercentage = offsetValue;
        this.hideInitially();
        this.createWaypoints();
    }
    hideInitially() {
        this.itemsToReveal.addClass("reveal-item reveal-item--hidden");
    }
    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function () {
            var currentItem = this;

            new Waypoint({
                element: currentItem,
                handler: function (direction) {
                    if (direction == "down") {
                        $(currentItem).addClass('reveal-item--visible');
                    } else {
                        $(currentItem).removeClass('reveal-item--visible');
                    }

                },

                offset: that.offsetPercentage,
            });

        });

    }
}

export default RevealOnScroll;
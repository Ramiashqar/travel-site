import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyLoading = $(".lazyload");
        this.navigationElement = $('.navigation__element');
        this.darkerNavigationTrigger = $('.large-hero__header--title');
        this.createWaypointsHeader();
        this.pageSections = $('.page-section');
        this.headerLinks = $(".navigation__list--link");

        this.createPageSectionWaypoints();
        this.addSmoothScrolling();
        this.refreshWayponits();
    }
    refreshWayponits() {
        this.lazyLoading.on('load', function () {
            Waypoint.refreshAll();
        });
    }

    addSmoothScrolling() {
        this.headerLinks.smoothScroll();
    }
    createWaypointsHeader() {

        var that = this;
        new Waypoint({
            element: this.darkerNavigationTrigger[0],
            handler: function (direction) {
                if (direction == "down") {
                    that.navigationElement.addClass("navigation__element--dark");
                } else {
                    that.navigationElement.removeClass("navigation__element--dark");
                }
            },
            offset: "10%"
        });
    }
    createPageSectionWaypoints() {
        var that = this;
        this.pageSections.each(function () {
            var currentPageSection = this;

            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "down") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-link-headers");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");

                    }
                },
                offset: "18%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function (direction) {
                    if (direction == "up") {
                        var matchingHeaderLink = currentPageSection.getAttribute("data-link-headers");
                        that.headerLinks.removeClass("is-current-link");
                        $(matchingHeaderLink).addClass("is-current-link");
                        console.log("up");

                    }
                },
                offset: "-65%"
            });
        });
    }
}

export default StickyHeader;
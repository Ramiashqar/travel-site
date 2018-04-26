// var $ = require('jquery');
// import Person from './modules/person';


// class Adult extends Person {
//     PayTaxis() {
//         console.log(this.name + "now ows $0 in taxes");
//     }
// }

// var john = new Person("Rami Ashqar 1 ", "blue");
// john.greet();

// var Jane = new Adult("Jane ", "green");
// Jane.greet();
// Jane.PayTaxis();

import MobileMenu from './modules/mobile-menu';
import $ from 'jquery';

import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".features-section__block"), "85%");
new RevealOnScroll($(".testimonials__card"), "65%");
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

import MobileMenu from './modules/Mobile-menu';
import $ from 'jquery';

import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

const mobileMenu = new MobileMenu();
const revealOnScroll1 = new RevealOnScroll($(".features-section__block"), "85%");
const revealOnScroll2 = new RevealOnScroll($(".testimonials__card"), "75%");
const stickyHeader = new StickyHeader();
const modal = new Modal();
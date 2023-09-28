'use strict';

let writeSomething = document.querySelector('#write-something');
let showWrittenText = document.querySelector('.show-written-text');
let printer = document.querySelector('#printer');

writeSomething.addEventListener('keydown', () => {
    showWrittenText.textContent = writeSomething.value;
});

printer.addEventListener('click', () => {
    showWrittenText.textContent = writeSomething.value;
});

'use strict';

let writeSomething = document.querySelector('#write-something');
let showWrittenText = document.querySelector('.show-written-text');
let resetButton = document.querySelector('#reset-button');

writeSomething.addEventListener('keyup', () => {
    showWrittenText.textContent = writeSomething.value;
});

resetButton.addEventListener('click', () => {
    showWrittenText.textContent = writeSomething.value = '';
});

'use strict';

let writeSomething = document.querySelector('#write-something');
let showWrittenText = document.querySelector('.show-written-text');
let resetButton = document.querySelector('#reset-button');

resetButton.addEventListener('click', () => {
    showWrittenText.textContent = writeSomething.value = '';
});

(
    function checking () {
        showWrittenText.textContent = writeSomething.value;
        setTimeout(checking, 10);
    }
)();

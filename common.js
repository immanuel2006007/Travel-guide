// Select elements for navigation
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

// Functionality for next and previous buttons
next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').appendChild(items[0]);
});

prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.slide').prepend(items[items.length - 1]);
});

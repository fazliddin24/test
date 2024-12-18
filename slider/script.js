let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function(){
    active = active + 1;
    reloadSlider();
}
prev.onclick = function(){
    active = active - 1;
    reloadSlider();
}
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
}


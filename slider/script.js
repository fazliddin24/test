let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('keyn');
let prev = document.getElementById('old');
let lengthItems = items.length - 1;
let active = 0;

next.onclick = function(){
    if(active === lengthItems){
        active = 0;
    }else{
        active = active + 1
    }reloadSlider()
}
prev.onclick = function(){
    if(active === 0) {
        active = lengthItems
    }else{
        active = active - 1
    }reloadSlider()
}
function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';
}



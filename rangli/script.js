// let box = document.querySelectorAll('.box'),
//     active = document.querySelector('.active'),
//     counter = 0;
//
// box.forEach(item => {
//     item.addEventListener('click', () => {
//         active.classList.add('resize');
//         if ( active.style.backgroundColor === item.innerText) {
//             active.classList.remove('resize');
//         }
//         active.style.backgroundColor = item.innerText;
//         removeClass();
//         item.classList.add('box_active');
//     });
// });
//
// function removeClass() {
//     box.forEach(box_item => {
//         box_item.classList.remove('box_active');
//     });
// }

let box = document.querySelectorAll('.box');
let active = document.querySelector('.active');

box.forEach((item, index) => {
    item.addEventListener('click', () => {
        removeClass();
        let nxtIndex = (index + 1) % box.length;
        box[nxtIndex].style.transform = `translateY(-100px)`;
    });
});

function removeClass() {
    box.forEach(box_item => {
        box_item.style.transform = 'translateY(0)';
    });
}


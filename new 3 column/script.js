const button1 = document.getElementById('box1');
const bgdiv = document.querySelector('.bgdiv');
let list = [{
    'img': 'link', 'name': 'link', 'text': 'link',
}, {
    'img': 'link', 'name': 'link', 'text': 'link',
}, {
    'img': 'link', 'name': 'link', 'text': 'link',
},{
    'img': 'link', 'name': 'link', 'text': 'link',
},{
    'img': 'link', 'name': 'link', 'text': 'link',
},];
bgdiv.innerHTML = ''
console.log(bgdiv)
list.forEach(item => {
    bgdiv.innerHTML += `<div id="box3" class="box3">
        <img id="js"
             src="${item.img}">
        <h5>${item.text}</h5>
    </div>`
})
button1.addEventListener('click', () => {
    bgdiv.style.display = 'flex';
    bgdiv.classList.add('active')
});

function closeBox() {
    document.getElementById('bgdiv').style.display = 'none';
    bgdiv.classList.remove('active')
}

bgdiv.addEventListener('click', (event) => {
    if (event.target === bgdiv) {
        closeBox();
    }
});

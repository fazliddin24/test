const bgnew = document.querySelector('.bgnew');
const bgdiv = document.querySelector('.bgdiv');
let list = [{
    'img': 'data:image/webp;base64,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',
    'name': 'HTML',
    'text': 'Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a\n' + '            web browser. It defines the content and structure of web content. It is often assisted by technologies such\n' + '            as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language.\n' + '\n' + '            Web browsers receive HTML documents from a web server or from local storage and render the documents into\n' + '            multimedia web pages. HTML describes the\n' + '            cues',
}, {
    'img': '', 'name': 'JS', 'text': '',
}, {
    'img': 'https://en.wikipedia.org/wiki/File:Python-logo-notext.svg',
    'name': 'PYTHON',
    'text': 'Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.[32]\n' + '\n' + 'Python is dynamically type-checked and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a "batteries included" language due to its comprehensive standard library.[33][34]\n' + '\n' + 'Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0.[35] Python 2.0 was released in 2000. Python 3.0, released in 2008, was a major revision not completely backward-compatible with earlier versions. Python 2.7.18, released in 2020, was the last release of Python 2.[36]',
},];


bgdiv.innerHTML = list.map((item, index) => `
  <div class="box1" data-index="${index}">
    <img src="${item.img}" alt="${item.name}" />
    <h6>${item.name}</h6>
    <h4>${item.text}</h4>
  </div>
`).join('');
document.querySelectorAll('.box1').forEach(box => {
    box.addEventListener('click', function () {
        const index = this.getAttribute('data-index');
        const item = list[index];

        bgnew.innerHTML = `
      <div id="div" class="div1 red">
        <h6><span onclick="closeBox()">X</span></h6>
        <h3>${item.name}</h3>
        <br />
        <img src="${item.img}" alt="${item.name}" />
        <h5 id="lorem">${item.text}</h5>
      </div>
    `;
        bgnew.classList.add('flex');
    });
});

function closeBox() {
    bgnew.classList.remove('flex');
}
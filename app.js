let film = document.getElementById('film');

let file1 = document.getElementById('file1');
let file2 = document.getElementById('file2');
let file3 = document.getElementById('file3');

let iframe1 = document.createElement('iframe');

srcUrl = 'https://piratestream.ml/player.html';

iframe1.src=srcUrl;
iframe1.id = 'rk';
iframe1.style = 'width="auto" height="auto" frameborder="0" scrolling="no" autoplay="1"';
iframe1.allowFullscreen = 'true';

film.appendChild(iframe1);

const ChangeFile1 = () => {
    srcUrl = 'https://piratestream.ml/player.html';
    iframe1.src=srcUrl;
}
window.addEventListener('load', ChangeFile1);
file1.addEventListener('click', ChangeFile1);

const ChangeFile2 = () => {
    srcUrl = 'https://piratestream.ml/player2.html';
    iframe1.src=srcUrl;
}
file2.addEventListener('click', ChangeFile2);

const ChangeFile3 = () => {
    srcUrl = 'https://piratestream.ml/player3.html;
    iframe1.src=srcUrl;
}
file3.addEventListener('click', ChangeFile3);

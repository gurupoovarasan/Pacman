function create(){
    isGameStarted=true;
    elem.style.display='block'
}

var imagesRight = ['PacMan1.png', 'PacMan2.png'];
var imagesLeft = ['PacMan3.png', 'PacMan4.png'];

let currentIndex = 0;
var imageElement = document.getElementById('img');
var currentImages = imagesRight;
var isGameStarted=false;

setInterval(imgMove, 200);

function imgMove() {
    imageElement.src = currentImages[currentIndex];
    currentIndex = (currentIndex + 1) % currentImages.length;
}

var elem = document.getElementById('img');
var pos = 0;
var vel = 5;

function move() {
    if (isGameStarted){
    pos = pos + vel;
    if (pos > window.innerWidth - elem.width || pos < 0) {
        vel = -vel;
        currentImages = vel > 0 ? imagesRight : imagesLeft;
    }
    elem.style.left = pos + 'px';
}
}

setInterval(move, 20);
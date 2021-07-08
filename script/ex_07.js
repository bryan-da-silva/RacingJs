let canvas = document.getElementsByTagName("canvas");
let button = document.getElementsByTagName('button');
let audio = new Audio("triangle.ogg");

draw = () => {
        let dessin = canvas[0].getContext('2d');
        dessin.beginPath();
        dessin.moveTo(6, 6);
        dessin.lineTo(14, 10);
        dessin.lineTo(6, 14);
        dessin.fillStyle = "white";
        dessin.fill();
}
draw();

canvas[0].onclick = marche = () => {
    audio.muted = false;
    audio.play();
}

button[0].onclick = pause = () => {
    audio.pause();
}

button[1].onclick = stop = () => {
    audio.pause();
    audio.currentTime = 0;
}

button[2].onclick = mute = () => {
    audio.muted = true;
}
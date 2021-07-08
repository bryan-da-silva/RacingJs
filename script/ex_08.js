let canvas = document.getElementsByTagName("canvas");

for(let i = 0; i < canvas.length; i++) {
    if(i <= 3) canvas[i].style.backgroundColor = 'orange';
    else if (i > 3 && i <= 6) canvas[i].style.backgroundColor = 'purple';
    else if (i > 6 && i <= 7) canvas[i].style.backgroundColor = 'black';
    else canvas[i].style.backgroundColor = 'olive';
}
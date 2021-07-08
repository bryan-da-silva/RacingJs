let div = document.getElementsByTagName('div');
let getImage = document.getElementsByTagName('img');
let web = localStorage.getItem('pangolin');
let appel = 0;
let appel2 = 0;
div[2].innerHTML = "<img src='" + web + "' width='100%' height='100%'>";
let Oldlargeur = getImage[0].width;

div[2].onmouseover = diminue = () => {
    clearTimeout(appel2);
    let reduc = getImage[0].width * 2 / 100;
    getImage[0].width -= reduc;
    appel = setTimeout(diminue, 1000);
}

div[2].onmouseout = leave = () => {
    clearTimeout(appel);
    let NewWidth = getImage[0].width;
    if (NewWidth < Oldlargeur) {
        let grand = getImage[0].width * 2 / 100;
        getImage[0].width += grand
        appel2 = setTimeout(leave, 1000);
    }
}

div[2].onclick = click = () => localStorage.removeItem('pangolin');


let a  = document.getElementsByTagName('a');
let footer  = document.getElementsByTagName('footer');
let diva = document.getElementsByTagName('div');
let jump = 0;

a[0].onclick = () => {
    let date = new Date(Date.now() + 86400000);
    date = date.toUTCString();
    document.cookie = "acceptsCookies=true; expires=" + date;
    jump = 1;
    let div = document.createElement('div');
    div.innerHTML = "<input type='button' value='Supprimer le cookie' onClick='sup()'>";
    footer[0].appendChild(div);
    diva[2].textContent = "";
}

sup = () => {
    document.cookie = 'acceptsCookies=; expires=Thu, 25 Jan 1980 00:00:00 UTC';
    footer[0].removeChild(diva[3]);
    diva[2].innerHTML = "Ce site utilise les cookies, cliquez sur OK si vous acceptez leur utilisation. <a href=\"#\">OK</a>";
}

if(document.cookie.substr(0, 14) === "acceptsCookies" && document.cookie.substr(-4) === "true") {
    diva[2].textContent = "";
    let div = document.createElement('div');
    div.innerHTML = "<input type='button' value='Supprimer le cookie' onClick='sup()'>";
    footer[0].appendChild(div);
}
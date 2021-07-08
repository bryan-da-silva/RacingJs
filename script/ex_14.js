let input = document.getElementsByTagName('input');
let div = document.getElementsByTagName('div');
div[3].textContent = "";
let texte = div[3].textContent;

input[0].addEventListener("keydown", (event) => {
    let ascii = event.key.charCodeAt(0);

    if (ascii >= 32 && ascii <= 126 && event.key.length === 1) {
        texte = div[3].textContent += event.key;
    }
    if (texte.substr(0, 3) === "[B]" && texte.substr(-4, texte.length) === "[/B]" && texte.length >= 8) {
        texte = div[3].textContent = texte.substr(3, texte.length - 7);
        div[3].style.fontWeight = "bold";
    }
    if (texte.substr(0, 3) === "[U]" && texte.substr(-4, texte.length) === "[/U]" && texte.length >= 8) {
        texte = div[3].textContent = texte.substr(3, texte.length - 7);
        div[3].style.textDecoration = "underline";
    }
    if (texte.substr(0, 3) === "[S]" && texte.substr(-4, texte.length) === "[/S]" && texte.length >= 8) {
        texte = div[3].textContent = texte.substr(3, texte.length - 7);
        div[3].style.textDecoration = "line-through";
    }
});
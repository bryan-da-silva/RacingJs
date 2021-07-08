let div = document.getElementsByTagName("div");
let i = 0;
let u = 0;
document.addEventListener("keydown", (event) => {
    let texte = div[2].textContent += event.key;
    i++;
    if (i >= 42) {
        div[2].textContent = texte.substr(-42, texte.length);
    }
});

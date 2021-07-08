let button = document.getElementsByTagName("button");
let Select = document.getElementsByTagName("select");
let body = document.body;
let taille = 17;

button[0].onclick = change = () => {
    taille += 1;
    body.style.fontSize = taille + "px";
}

button[1].onclick = change = () => {
    taille -= 1;
    body.style.fontSize = taille + "px";
}

Select[0].addEventListener('click', function() {
    let Index = Select[0].selectedIndex;
    body.style.backgroundColor = Select[0].options[Index].value;
})
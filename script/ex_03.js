let div = document.getElementsByTagName("div");
let nom;
let fin = 0;

div[2].onclick = change = () => {
    nom = prompt("Quel est votre nom ?");
    while (fin === 0) {
        if(nom.length < 1) {
            nom = prompt("Quel est votre nom ?");
        } else if (nom.length > 0) {
            if(window.confirm("Etes vous sûr que " + nom + " est votre nom ?")) {
                div[2].innerHTML = "Bonjour " + nom + " !";
                window.alert("Bonjour " + nom + " !");
            }
            fin++;
        }
    }
    fin = 0;
}
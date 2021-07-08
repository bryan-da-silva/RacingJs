let div = document.getElementsByTagName("div");

class Hero {
    constructor(name, role, intelligence, force) {
        this.name = name;
        this.role = role;
        this.intelligence = intelligence;
        this.force = force;
    }
    toString() {
        div[2].textContent += "Je suis " + this.name + " le " + this.role + ", j'ai " + this.intelligence
            + " points d'intelligence et " + this.force + " points de force !\n";
        div[2].style.whiteSpace = "pre-line";
    }
}
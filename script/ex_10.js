let div = document.getElementsByTagName("div");
let aff_max = 0;
let jump = 0;
let content = 0;
let signe = 0;
let nombre1 = 0;
let nombre2 = 0;
let suite = 1;
let recup = 0;
for (let i = 6; i < div.length; i++) {
    div[i].onclick = calcul = () => {
        if(i >= 10 && i <= 12 || i >= 14 && i <= 16 || i >= 18 && i <= 20 || i === 22) {
            div[4].textContent += div[i].textContent;
            if (recup === 0) nombre1 = div[i].textContent;
            if (recup === 1) nombre2 = div[i].textContent;
            jump = 1;
        } else if(jump === 1 && i !== 24 && i !== 23 && i !== 7 && signe === 0 || suite === 0) {
            div[4].textContent += div[i].textContent;
            content = div[i].textContent;
            jump = 0;
            signe = 1;
            suite = 1;
            recup = 1;
        } else if (i === 24 && jump === 1 && signe === 1){
            let parsed1 = parseInt(nombre1, 10);
            let parsed2 = parseInt(nombre2, 10);
            if (content === "%") div[4].textContent = parsed1 % parsed2;
            if (content === "/") div[4].textContent = parsed1 / parsed2;
            if (content === "+") div[4].textContent = parsed1 + parsed2;
            if (content === "-") div[4].textContent = parsed1 - parsed2;
            if (content === "x") div[4].textContent = parsed1 * parsed2;
            jump = 0;
            signe = 0;
            suite = 0;
        } else if(i === 7) {
            div[4].textContent = "";
            jump = 0;
            signe = 0;
            suite = 0;
        }
    }
}


/*if (aff_max < 9) {
    if(div[i].textContent === "1") {
        div[4].textContent += div[i].textContent;
    }
}
aff_max++;*/

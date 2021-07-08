let div = document.getElementsByTagName('div');
let web = localStorage.getItem('pangolin');

localStorage.setItem('pangolin', 'https:/www.webacademie.org/wp-content/uploads/2019/11/LOGO-WEBACADEMIE-2019-QUADRI-2048x367.png');
div[2].innerHTML = "<img src='" + web + "' width='100%' height='100%'>";
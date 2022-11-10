var atalho1 = window.document.getElementById("atalho1");
var atalho2 = window.document.getElementById("atalho2");
var atalho3 = window.document.getElementById("atalho3");

function salvar(){


    //Salva os atalhos
    localStorage.setItem('txt_atalho1', atalho1.value);
    localStorage.setItem('txt_atalho2', atalho2.value);
    localStorage.setItem('txt_atalho3', atalho3.value);

    window.close();
}

function carregar(){
    atalho1.value = localStorage.getItem('txt_atalho1')
    atalho2.value = localStorage.getItem('txt_atalho2')
    atalho3.value = localStorage.getItem('txt_atalho3')
}

function transposto(){
    var botoes_inferiores = window.document.getElementById("botoes_inferiores")
    var botoes_laterais = window.document.getElementById("botoes_laterais")

    if (botoes_laterais.classList.contains('oculto')){
        deixar_na_lateral()
    }else{
        deixar_em_baixo()
    }
    
}

function deixar_na_lateral(){
 
    var botoes_inferiores = window.document.getElementById("botoes_inferiores")
    var botoes_laterais = window.document.getElementById("botoes_laterais")
    
    botoes_inferiores.classList.add('oculto');
    
    botoes_laterais.classList.remove('oculto');
    botoes_laterais.classList.add('col-lg-3');
    botoes_laterais.classList.add('celula_lateral');

    //Salva o tipo de layout
    localStorage.setItem('layout', '2');
    atualizarPosicao()
}


function deixar_em_baixo(){
 
    var botoes_inferiores = window.document.getElementById("botoes_inferiores")
    var botoes_laterais = window.document.getElementById("botoes_laterais")
    
    botoes_inferiores.classList.remove('oculto');
    
    botoes_laterais.classList.add('oculto');
    botoes_laterais.classList.remove('col-lg-3');
    botoes_laterais.classList.remove('celula_lateral');

    //Salva o tipo de layout
    localStorage.setItem('layout', '1');

}


function verificaLayout(){
    // Pegando a informação do local Storage
    var layout = localStorage.getItem('layout');
    
    if (layout=='2'){
        deixar_na_lateral()        
    }
    if (layout=='1'){        
        deixar_em_baixo()
    }
}

//mudar o layout assim que carregar
verificaLayout()





/////////////////////////////////////////////////   //////////////////////////


addEventListener("mouseover", (event) => {  
         
    // pegarPosicao()
});

$('body').mouseleave(function(){
    atualizarPosicao()    
})




function pegarPosicao() {
    var elemento = document.getElementById('mydiv');
    var estilo = getComputedStyle(elemento);

    localStorage.setItem('posi_top', estilo.top);
    localStorage.setItem('posi_left',estilo.left)   
}


function atualizarPosicao() {
    var posi_top = localStorage.getItem('posi_top');
    var posi_left = localStorage.getItem('posi_left');

    var elemento = document.getElementById('mydiv');                
    elemento.style.top = `${posi_top}`;
    elemento.style.left = `${posi_left}`;
}
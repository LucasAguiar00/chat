scroollspy_modelo_padrao()
// scroollspy_modelo_pessoais()

function scroollspy_modelo_padrao(){
    
    let titulos = document.querySelectorAll(".modelos_pad > strong")
    let menu = document.getElementById("menu_rapido_modelos_padroes")
    // console.log(titulos)

    let index = 1
    // Adicionando o id no títulos
    titulos.forEach(element => {
        //console.log(element.innerHTML)
        element.id = `seletorA_${index}`        
        element.innerText = `${index}. ${element.innerText}`
        menu.innerHTML += `<a class="dropdown-item" href="#seletorA_${index}">${element.innerText}</a>`
        element.innerHTML += ` <a class="" href="#topoA" data-toggle="tooltip" data-placement="top" title="Ir para o topo" style="position: absolute;left: 90%;" >⏫</a>`
        index = index + 1
    });

}




function scroollspy_modelo_pessoais(){   

    let titulos = document.querySelectorAll(".modelos_pad_pessoais > strong")
    let menu = document.getElementById("menu_rapido_modelos")
    // console.log(titulos)


    let index = 1
    // Adicionando o id no títulos
    titulos.forEach(element => {
        //console.log(element.innerHTML)
        element.id = `seletorB_${index}`
        element.innerText = `${index}. ${element.innerText}`
        menu.innerHTML += `<a class="dropdown-item" href="#seletorB_${index}">${element.innerText}</a>`
        element.innerHTML += ` <a class="" href="#topoB" data-toggle="tooltip" data-placement="top" title="Ir para o topo" style="position: absolute;left: 90%;" >⏫</a>`
        index = index + 1        
    });

}



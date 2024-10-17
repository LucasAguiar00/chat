

function copiar_padrao(){
    var elements = document.querySelectorAll(`[class^="campo_preenchimento_ncc"]`)
    var mensagem = `Olá ${saudacao()}, pode verificar?\n\n`
    
    // Modelo antigo
    //mensagem += `SN: ${elements[0].value}\nUsuário: ${elements[1].value}\nCidade: ${elements[2].value}\nAutenticação: ${elements[3].value}\nPlano: ${elements[4].value}\nEndereço: ${elements[5].value}\nMotivo da verificação: ${elements[6].value}\nNome: ${elements[7].value}\nnº de telefone do cliente: ${elements[8].value}\n`
    
    // Modelo novo
    mensagem += `SN: ${elements[0].value}\nCidade: ${elements[2].value}\nAutenticação: ${elements[3].value}\nPlano: ${elements[4].value}\nEndereço: ${elements[5].value}\n${elements[7].value}(${elements[1].value}) nº ${elements[8].value}. ${elements[6].value}`

    if (elements[9].value!=""){
        mensagem += `\nApresenta risco de acidente: ${elements[9].value}`
    }
    
    console.log(mensagem)

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(mensagem)
}


// A FUNÇAO ABAIXO EXIBE O MODAL ASSIM QUE A PÁGINA É CARREGADA
window.addEventListener("load", (event) => {
    //$('#notificacaoNovidades').modal('show')
});
              

function apagar_modelo_noc(){
    var elements = document.querySelectorAll(`[class^="campo_preenchimento_ncc"]`)
    elements.forEach(function(el) {
        el.value = ""
    })
    
}


function auto_preenchimento(){
    var elements = document.querySelectorAll(`[class^="campo_preenchimento_ncc"]`)

    // nome do cliente
    elements[7].value = document.getElementById("nome_cliente").value 

    // telefone do cliente
    elements[8].value = document.getElementById("telefone").value
}

function saudacao() {
    const horaAtual = new Date().getHours();
    
    if (horaAtual >= 0 && horaAtual < 12) {
      return "bom dia";
    } else if (horaAtual >= 12 && horaAtual < 18) {
      return "boa tarde";
    } else {
      return "boa noite";
    }
  }
  
  console.log(saudacao());
  


function copiar_padrao(){
    var elements = document.querySelectorAll(`[class^="campo_preenchimento_ncc"]`)
    var mensagem = "Olá, pode verificar?\n"
    
    mensagem += `FHTT: ${elements[0].value}\nUsuário: ${elements[1].value}\nCidade: ${elements[2].value}\nAutenticação: ${elements[3].value}\nPlano: ${elements[4].value}\nEndereço: ${elements[5].value}\nMotivo da verificação: ${elements[6].value}\nNome e nº de telefone do cliente: ${elements[7].value}`
    console.log(mensagem)

    // Passando as informações para a área de transferência
    navigator.clipboard.writeText(mensagem)
}
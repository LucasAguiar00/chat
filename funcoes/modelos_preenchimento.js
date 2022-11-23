var descricao = window.document.getElementById("descricao")

function fun_Fiberhome(){    
    descricao.value += `\n\n• Power: On/Off\n• PON/LINK: On/Off/Piscando\n• LOS/Perda: Piscando/off`
}

function fun_ONU_NOKIA(){    
    descricao.value += `\n\n• Power: Verde estático/vermelho estático/apagado \n• LINK: Verde estático/Apagado \n• AUTH: Verde estático/Verde Piscando/ Apagado`
}


function fun_Conversor_NOKIA(){
    descricao.value += `\n\n• Power: Verde estático / Apagado \n• Alarm: vermelho estático/ Apagado \n• Conection: Verde estático / Verde Piscando /Apagado \n• ETH: Verde estático / Verde Piscando / Apagado`
}

function fun_Datacom(){
    descricao.value += `\n\n• Power: Verde estático/apagado \n• PON: Verde estático/apagado \n• ETH1: Verde estático/Verde Piscando/ Apagado`
}


function fun_Montagem_de_Rede(){
    descricao.value += `Cliente solicita montagem de rede. <hr> Montagem de rede: R$ 105,00 \nNº de pontos adicionais: não informou \nValor pontos adicionais: X * R$ 35,00 \nConfiguração de roteador: (Sim R$ 35,00 / Não) \mValor total: R$ 105,00 + Valor pontos adc + Config. roteador. \nForma de pagamento: parcelamento em 4x. \n \nCliente ciente de que se a rede ultrapassar [(Nº pontos adicionais * 20m) + 20m], será cobrado R$ 3,00 por metro excedente. <hr> Encaminhado para verificação técnica no local, ciente do prazo de até sete dias úteis para ocorrer.`
}

function fun_Mudanca_de_comodo(){
    descricao.value += `Cliente solicita mudança de cômodo. Ciente do valor de R$ 50,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer.`
}
function fun_Mudanca_de_comodo_amparo(){
    descricao.value += `Cliente solicita mudança de cômodo. Ciente do valor de R$ 50,00 (em parcela única), do prazo máximo de 7 dias úteis para ocorrer.`
}
function fun_Transferência_de_endereço(){
    descricao.value += `Cliente solicita transferência de endereço. Ciente do valor de R$ 50,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer, e que é necessário levar os dispositivos ao novo endereço. Cliente já está no novo endereço. \n<hr> <b> Novo endereço: </b>. \n<hr> Confirmada a disponibilidade de conexão no local por:\n`
}
function fun_Transferência_de_endereço_amparo(){
    descricao.value += `Cliente solicita transferência de endereço. Ciente do valor de R$ 100,00 (parcelado em 2 vezes), do prazo máximo de 7 dias úteis para ocorrer. Cliente já está no novo endereço. \n<hr> <b> Novo endereço:</b> \n<hr> Confirmado a disponibilidade de conexão no local por: \n`
}
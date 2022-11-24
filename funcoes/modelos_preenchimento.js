var descricao = window.document.getElementById("descricao")

//------------------------------------------------------
//Equipamentos Ópticos
//------------------------------------------------------
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

//------------------------------------------------------
// Serviços
//------------------------------------------------------
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



//------------------------------------------------------
//Financeiro 
//------------------------------------------------------
function fun_desb3001 (){
    descricao.value += `Cliente entrou em contato solicitando o desbloqueio da conexão, ciente dos valores em pendência assim como o prazo de 3 a 5 dias corridos do desbloqueio. Orientado a realizar o reinicio manual do equipamento durante 15 minutos. Sem mais dúvidas.\n\n<b>Pendências em atraso no sistema:</b>`
}
function fun_desb3001_indisp (){
    descricao.value += `Cliente solicita desbloqueio da conexão. Identificado bloqueio 3001. Ciente de que não é possível liberar o acesso em sistema, uma vez que já foi concedido o desbloqueio por 5 dias corridos. Repassados os valores atualizados e prazos das pendências, assim como as formas de pagamento disponíveis, sem mais dúvidas.\n\n<b>Pendências em atraso:</b>`
}
function fun_desb3001_pag_efetuado (){
    descricao.value += `Cliente relata falta de conexão após o pagamento da pendência. Identificado bloqueio 3001. Ciente de que ainda não ocorreu o reconhecimento bancário do pagamento realizado, sendo necessário aguardar o prazo máximo de 72 horas úteis. Sem mais dúvidas.`
}
function fun_bloqueio_verde (){
    descricao.value += `Cliente solicita desbloqueio da conexão. Identificado bloqueio verde. Ciente de que não é possível liberar o acesso em sistema e ciente dos valores atualizados e prazos das pendências. Repassadas as formas de pagamento disponíveis, sem mais dúvidas.\n\n<b>Pendências em atraso:</b>`
}
function fun_bloqueio_azul (){
    descricao.value += `Cliente solicita o bloqueio temporário da conexão. Ciente que o cadastro poderá ficar bloqueado por até 120 dias corridos e que o desbloqueio será automático. Repassado que para solicitar o bloqueio ele deve pagar todos as faturas em aberto no sistema e será gerada outra referente aos dias de uso até o data da solicitação. Ciente também que pode estar solicitando esse serviço no escritório local ou através do e-mail bloqueio@fasternet.com.br.`
}

//------------------------------------------------------
//Senha Wi-FI 
//------------------------------------------------------

function fun_senha_wifi_ip (){
    descricao.value += `Cliente solicita troca de senha wi-fi. Feito o acesso às configurações do roteador pelo IP padrão. Alteração feita com sucesso. Sem mais dúvidas.`
}
function fun_senha_wifi_app (){
    descricao.value += `Cliente solicita troca de senha wi-fi. Feito o acesso às configurações do roteador pelo aplicativo. Repassadas as instruções, alteração feita com sucesso. Sem mais dúvidas.`
}



//------------------------------------------------------
//Cancelamento e Troca de titularidade
//------------------------------------------------------

function fun_can_titular (){
    descricao.value += `Cliente solicita cancelamento da conexão. Informado de que tal solicitação será repassada para o setor responsável, que fará posterior contato para fins de conclusão/negociação. Cliente ciente da solicitação em sistema, sem mais dúvidas. \n<b>Motivo do cancelamento: </b> <hr> \n<b>Ofertado: </b> XXXXXX <hr> \n<b> Verificação com a supervisão: </b>`
}

function fun_can_com_pendencia (){
    descricao.value += `Cliente solicita cancelamento da assinatura. Ciente de que há pendências em atraso e que é necessário quitá-las para fazer o pedido de cancelamento por esse canal de atendimento. Repassada a possibilidade de efetuar o pedido diretamente no escritório munido dos equipamentos. Informados os valores e prazos atualizados com juros, assim como as formas de pagamento disponíveis. Sem mais dúvidas. \n<hr>Pendências em atraso:`
}

function fun_can_outra_pessoa (){
    descricao.value += `Cliente solicita cancelamento da conexão. Ciente de que tal procedimento deve ser tratado diretamente com o titular da conta. Solicitado novo contato. Sem mais dúvidas.`
}

function fun_troca_titularidade (){
    descricao.value += `Cliente solicitou informação sobre troca de titularidade. Repassado que o titular deve encaminhar o pedido para cancelamento@fasternet.com.br, no qual deve ser enviado também como cópia para o novo titular da conta. Caso não seja possível, pode ser solicitada no escritório local e é necessária a presença do atual e do novo titular, assim como a documentação de ambos.`
}

//------------------------------------------------------
//SUPORTE
//------------------------------------------------------

function fun_sup_falta_de_conexao (){
    descricao.value += `Cliente relata falta de conexão. `
}
function fun_sup_lentidao (){
    descricao.value += `Cliente relata lentidão. `
}
function fun_sup_oscilação (){
    descricao.value += `Cliente relata oscilação. `
}


function fun_sup_reinicio (){
    descricao.value += `Foi solicitado o reinício dos equipamentos. `
}
function fun_sup_checagem_cabos (){
    descricao.value += `Realizado a checagem dos cabos nos dispositivos. `
}
function fun_sup_teste_de_velocidade(){
    descricao.value += `\n<hr><b>Valores obtidos pelo teste cabeado no fast.com:</b> \n<b>Download:</b> XXX Mbps, XXX Mbps, XXX Mbps \n<b>Upload:</b> XXX Mbps, XXX Mbps, XXX Mbps \n<b>Latência:</b> XXX ms, XXX ms, XXX ms `
}

function fun_sup_conexao_normalizada (){
    descricao.value += `\n\nConexão normaliza. `
}
function fun_sup_envio_de_vs (){
    descricao.value += `\n\nEncaminhado para verificação técnica no local, ciente do prazo de até três dias úteis para ocorrer.`
}
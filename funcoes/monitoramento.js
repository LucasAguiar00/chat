

var mensagens_monitoradas = document.getElementById("mensagens_monitoradas")

// Campos de interesse
var protocolo_chat = window.document.getElementById("protocolo_chat")
var protocolo_adm = window.document.getElementById("protocolo_adm")
var nome_cliente = window.document.getElementById("nome_cliente")
var telefone = window.document.getElementById("telefone")
var bfp = window.document.getElementById("bfp")
var descricao = window.document.getElementById("descricao")
var h_preferencia = window.document.getElementById("h_preferencia")
var ponto_referencia = window.document.getElementById("ponto_referencia")


function monitorador(){
    var msg = ""
    
    if ((descricao.value.includes("cance"))||(descricao.value.includes("reten")||(descricao.value.includes("reativ")))) {
        msg = `❗Cadastros TP não são tratados pela Retenção!`
        msg_monitorador(msg)
    }

    if ((descricao.value.includes("tenta"))||(descricao.value.includes("Tenta"))||(descricao.value.includes("postal"))||(descricao.value.includes("area")||(descricao.value.includes("área"))||(descricao.value.includes("de contato")))) {
        msg = `📞📵Tentativa de contato identificada. Verifique se:\n- DDD está correto;\n- se ao retornar está sendo adicionado o 0 no zoiper;\n- se não falta o dígito 9 no início do telefone celular.`
        msg_global(msg) //Global não depende do nome do cliente
    }

    if (descricao.value.includes("'")) {
         msg = "Identificado o caractere ' em uso, \no ADM não permite para salvar o protocolo!"        
         msg_monitorador(msg)
    }
    if ((descricao.value.includes("reais"))||(descricao.value.includes("R$")||(descricao.value.includes("$")))) {
        msg = "Tenha atenção as informações sobre valores anexados!"        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("/C:/Users")) {
        msg = "Identificamos um link de comprovante/foto inválido!\nCopie o link do Omini."        
        msg_monitorador(msg)
    }
    if ((descricao.value.includes("azul"))||(descricao.value.includes("bloqueio temporário")||(descricao.value.includes("temporário")))) {
        msg = "Regras para o bloqueio temporário:\n1 - Realizar o bloqueio mediante a SOLICITAÇÃO do cliente;\n2 - O cliente deve estar na base há pelo menos 6 meses;\n3 - Não deve possuir valores em aberto;\n4 - O desbloqueio é automático após o período solicitado;\n5 - Os bloqueios podem ser de 30, 60, 90 e 120 dias."        
        msg_monitorador(msg)
    }
    if (descricao.value.includes("campinas")||descricao.value.includes("Campinas")) {
        msg = "Cidade de Campinas!\n Esta cidade não tem grupo específico, é usado SupAmparo."        
        msg_monitorador(msg)
    }
    if ((descricao.value.includes("rádio")||descricao.value.includes("Rádio")||descricao.value.includes("base")||descricao.value.includes("NS")||descricao.value.includes("torre")||descricao.value.includes("radio")||descricao.value.includes("Radio"))&&(bfp.value.includes("Padrão Fibra"))) {
        msg = "📡 Possível cliente Rádio detectado.\nNecessário mudar a BFP do cliente."        
        msg_monitorador(msg)
    }

    if ((h_preferencia.value!=="")||(ponto_referencia.value!=="")){
        msg = "Visita técnica detectada👷🏻!\n▶️Verifique se a visita foi enviada corretamente.\n▶️Verifique se o grupo está correto."        
        msg_monitorador(msg)
    }

    // quando não tem mais texto
    if (descricao.value == "") {
        mensagens_monitoradas.innerHTML= ""
    }

}

function msg_monitorador(msg){
        
    var chave = window.location.hash;
    //console.log(chave)

    // Verificar se a chave já existe no localStorage
    if (!localStorage.getItem(chave)) {

    }else{
        // // Se existir, configurar o valor padrão para a chave
        // var msg_antigas = `${localStorage.getItem(chave)},${msg}`
        // //console.log(localStorage.getItem(chave))
        // localStorage.setItem(chave, msg_antigas)

        // Verificando se a msg já foi acionada
        if (localStorage.getItem(chave).includes(msg)) {
            
        } else {            
            var msg_antigas = `${localStorage.getItem(chave)},${msg}`            
            localStorage.setItem(chave, msg_antigas)
            Toastify({                                
                text: `${msg}`,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`                
                style: {
                    background: "#f44336",                    
                },
                duration: 10000            
            }).showToast();                
        }
    }          

}

$('body').mouseleave(function(){
    monitorador()
    window.location.hash = nome_cliente.value
    var fragmentoUrl = window.location.hash;
    verificarEConfigurarLocalStorage(fragmentoUrl, "")
})




function verificarEConfigurarLocalStorage(chave, valorPadrao) {
    // Verificar se a chave já existe no localStorage
    if (!localStorage.getItem(chave)) {
        // Se não existir, configurar o valor padrão para a chave
        localStorage.setItem(chave, JSON.stringify(valorPadrao));
    }
}




// Verificar se a chave já existe no localStorage
if (!localStorage.getItem("BemVindo")) {

    localStorage.setItem("BemVindo", "1")
    
}else{
    // // Se existir, configurar o valor padrão para a chave
    // var msg_antigas = `${localStorage.getItem(chave)},${msg}`
    // //console.log(localStorage.getItem(chave))
    // localStorage.setItem(chave, msg_antigas)

    // Verificando se a msg já foi acionada
    if (parseInt(localStorage.getItem("BemVindo"))>1) {
        
    } else { 

        Toastify({

            text: "👻\nBem vindo(a)!\nAtive as notificações do navegador para os alertas de pausa",
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`                
            style: {
                // background: "#f44336",
                background: "#4d6ef7",
                // background: "#17a2b7",
            },
            duration: 5000         
        
        }).showToast();
        
        // Registra que já foi ativado
        localStorage.setItem("BemVindo", parseInt(localStorage.getItem("BemVindo"))+1)
        
        //NOTIFICAÇAO INICIAL
        Notification.requestPermission(/* opcional: callback */);

        var notification = new Notification("ALERTA", {
            icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzOkyYZVJdWlMZDRKSBDzVXgITClawUYKV6fD2W0q4ew&s',
            body: "Obg por ativar as notificações"
        });
        notification.onclick = function() {
            //window.open("http://stackoverflow.com");
        }
                
    }
}




// A cada 10 min
// setInterval(verificarHorario(0,8), 600000);
// setInterval(verificarHorario(20,23), 600000);

// A cada 1 min
setInterval(verificarHorario(0,8), 60000);
setInterval(verificarHorario(20,23), 60000);
setInterval(verificarDia(), 60000);

function verificarHorario(h1,h2) {
    var agora = new Date();
    var horas = agora.getHours();    

    if ((horas >=h1) && (horas < h2)|(horas>=23)) {          
        Toastify({

            text: "📢📢🦓\nAtenção Retenção indisponível!\n Horário de funcionamento:\n08h-20h\nSeg-Sáb",
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`                
            style: {
                // background: "#f44336",
                // background: "#4d6ef7",            
                background: "#abc711",
            },
            duration: 5000         
        
        }).showToast();
    }
}


function verificarDia(){

    const dataAtual = new Date();
    const diaSemana = dataAtual.getDay();
    const horaAtual = dataAtual.getHours();
    
    if (diaSemana === 0) {         
        Toastify({

            text: "📢📢🦓\nAtenção Retenção indisponível no Domingo!\n Horário de funcionamento:\n08h-20h\nSeg-Sáb",
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`                
            style: {
                // background: "#f44336",
                // background: "#4d6ef7",            
                background: "#abc711",
            },
            duration: 5000         
        
        }).showToast();
    }
}




function msg_global(msg){
    console.log("entrei")
    // Verificar se a chave já existe no localStorage
    if (!localStorage.getItem("Noti_contato")) {
        // // Se existir, configurar o valor padrão para a chave
        localStorage.setItem("Noti_contato", 0)        
    }else{            

        // Verificando se a msg já foi acionada
        if (parseInt(localStorage.getItem("Noti_contato"))==0) {    
            Toastify({                                
                text: `${msg}`,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`                
                style: {
                    background: "#f44336",                    
                },
                duration: 10000            
            }).showToast();      
            
            setInterval(function() {                      
                // Registra que já foi ativado
                localStorage.setItem("Noti_contato", 0)                 
            }, 60000); // Executa a cada 1min
        } 
        // Registra que já foi ativado
        localStorage.setItem("Noti_contato", parseInt(localStorage.getItem("Noti_contato"))+1)
    }
}
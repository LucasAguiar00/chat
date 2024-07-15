<?php
	
	session_start();
	
  if( isset($_SESSION['idUser']) && !empty($_SESSION['idUser']) ){ 

	?>

<!DOCTYPE html>
<html>

<head>
  <meta charset="UTF-8">
  <title>Verificações de protocolos</title>
  <link rel="stylesheet" href="style.css">  
  <!--FAVICON-->
  <link rel="icon" type="image/x-icon" href="https://img.icons8.com/?size=512&id=_jtfUqyZM2Pw&format=png">


  <!--BOOTSTRAP-->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

</head>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
  integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
  integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
  integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
  integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
  integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>

<body onload="atualizar_posi()">
  <div class="verif_protocolos">
    <h1>Verificações de protocolos</h1>

    <button id="transferButton" class="btn btn-outline-primary">Transferir</button>
    <button id="cleanButton" class="btn btn-outline-primary">Apagar Todos</button>    
    <button id="cleanButton" onclick="addLinhas()" class="btn btn-outline-primary">Adicionar linhas</button>
    <button class="btn btn-outline-primary" ><a
              href="https://ncc.drozbase.com/docs/Verificacao-de-protocolos-p0h3nf5c80fssyep3yjaccebg1?utm_source=share"
              target="_blank">Como usar...
           </a>
    </button>
    --
    <span class="btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
      <label class="btn btn-outline-danger" for="btnradio1">Abrir em uma nova aba</label>
    
      <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
      <label class="btn btn-outline-danger" for="btnradio2">Abrir em uma nova guia</label>  
    </span>
    <!-- --
    <select id="mouse" onchange="alterarMouse()" class="btn btn-info">
      <option value="-">Tipos de 🖱</option>
      <option value="1">Tipo 1 🖱</option>
      <option value="2">Tipo 2 🖱</option>
      <option value="3">Tipo 3 🖱</option>      
      <option value="4">Tipo 4 🖱</option>     
      <option value="5">Tipo 5 🖱</option>   
    </select> -->

    <br> <br>
    <span id="notificacao"></span>

    <table id="excelTable">
      <thead>
        <tr>
          <th></th>
          <th>Data</th>
          <th>Hora</th>
          <th>Submotivo</th>
          <th>Protocolo</th>
          <th>Necessário VS?</th>
          <th>Operador(a)</th>
          <th></th>
          <th></th>
          <th><input type="text" placeholder="Digite seu usuário do ADM" id="Verificador" value="<?php echo $_SESSION['user_ncc']; ?>" > </th>
        </tr>
      </thead>
      <tbody id="linhas">
        <tr>          
            <td><span class="num_posi"></span></td>            
            <td><input type="text" class="cell" id="cell00"></td>
            <td><input type="text" class="cell" id="cell01"></td>
            <td><input type="text" class="cell" id="cell02"></td>
            <td class="btn btn-group"><input type="text" class="cell" id="cell03" > <button onclick="link_protocolo(this.parentElement.firstChild)">Abrir</button> </td>
            <td><input type="text" class="cell" id="cell04"></td>
            <td><input type="text" class="cell" id="cell05"></td>
            <td><button class="btnn btn btn-warning" name="dentro_dos_padroes" onclick="dentro_dos_padroes(this)">Dentro
                dos padrões</button></td>
            <td><button class="btnn btn btn-warning" name="fora_dos_padroes" onclick="fora_dos_padroes(this)">Fora dos
                padrões</button></td>
            <td><button class="btnn btn btn-info" onclick="link_formulario(this)">Formulario</button></td>
        </tr>


        <!-- Adicione mais 9 linhas semelhantes aqui -->
      </tbody>
    </table>

    <br><br>
    <div id="atalhos">
      <div>
        <input class="atalho" type="text" value="Dentro dos padrões NCC."> &nbsp
        <button class="btn btn-outline-info" onclick="copiar_atalho(this)">Copiar</button>
      </div>
      <div>
        <input class="atalho" type="text" value="Falta o status dos leds"> &nbsp
        <button class="btn btn-outline-info" onclick="copiar_atalho(this)">Copiar</button>
      </div>
      <div>
        <input class="atalho" type="text" value="Motivo incorreto, seria o ..."> &nbsp
        <button class="btn btn-outline-info" onclick="copiar_atalho(this)">Copiar</button>
      </div>
      <div>
        <input class="atalho" type="text" value="Marcado como necessário VS incorretamente"> &nbsp
        <button class="btn btn-outline-info" onclick="copiar_atalho(this)">Copiar</button>
      </div>
      <div>
        <input class="atalho" type="text" value="Não registrou o ponto de referência e o horário de preferência."> &nbsp
        <button class="btn btn-outline-info" onclick="copiar_atalho(this)">Copiar</button>
      </div>
    </div>
  </div>

</body>

<script src="script.js"></script>

<script>
  window.onload = function() {
    for (let i = 0; i < 12; i++) {
      addLinhas();
    }
  };
</script>


</html>


<?php
	}else{
		header('Location: ../index.php');
		exit;
	}
?>

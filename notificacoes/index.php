<?php  

    echo "Notificações";

?>


<!DOCTYPE html>
<html>
<head>
	<title>Notificações</title>

	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

	<style>
		/* Estilizar as notificações */
		.notification {
			background-color: #f0f0f0;
			border: 1px solid #ccc;
			padding: 10px;
			margin-bottom: 10px;
			border-radius: 5px;
			box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
		}
		
		.notification.success {
			background-color: #dff0df;
			border-color: #3e8e41;
		}
		
		.notification.error {
			background-color: #f2dede;
			border-color: #a94442;
		}
		
		.notification.info {
			background-color: #d9edf7;
			border-color: #31708f;
		}
		
		.notification.warning {
			background-color: #fcf8e3;
			border-color: #8a6d3b;
		}
		
		/* Estilizar o título das notificações */
		.notification.title {
			font-weight: bold;
			margin-bottom: 5px;
		}
		
		/* Estilizar o texto das notificações */
		.notification.text {
			font-size: 14px;
			color: #666;
		}
	</style>
</head>
<body>
	<h1>Notificações</h1>
	
	<!-- Notificação de sucesso -->
	<div class="notification success">
		<div class="title">Título da notificação de sucesso</div>
		<div class="text">Este é um exemplo de notificação de sucesso.</div>
	</div>
	
	<!-- Notificação de erro -->
	<div class="notification error">
		<div class="title">Título da notificação de erro</div>
		<div class="text">Este é um exemplo de notificação de erro.</div>
	</div>
	
	<!-- Notificação de informação -->
	<div class="notification info">
		<div class="title">Título da notificação de informação</div>
		<div class="text">Este é um exemplo de notificação de informação.</div>
	</div>
	
	<!-- Notificação de aviso -->
	<div class="notification warning">
		<div class="title">Título da notificação de aviso</div>
		<div class="text">Este é um exemplo de notificação de aviso.</div>
	</div>
	
	<!-- Adicionar mais notificações aqui -->
	
	<script>
		// Adicionar funcionalidade para fechar as notificações
		document.addEventListener("DOMContentLoaded", function() {
			var notifications = document.querySelectorAll(".notification");
			for (var i = 0; i < notifications.length; i++) {
				notifications[i].addEventListener("click", function() {
					this.style.display = "none";
				});
			}
		});
	</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>


<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

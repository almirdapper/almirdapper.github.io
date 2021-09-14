


function horas(){
	var data = new Date();
	var hora    = data.getHours();          
	var min     = data.getMinutes();
	var horaD = hora +':'+ min 
	document.getElementById('horaAtual').value = 'horaD'


	horaAtual.innerHTML = horaD

}

window.onload = horas;
var data = new Date();

var dia = data.getDate(); 
var mes = data.getMonth()+1; 
var ano = data.getFullYear();


function idade(){
	var dataUs = new Date(document.getElementById('dataUsuario').value) 
	var diaUs = dataUs.getDate() +1; 
	var mesUs = dataUs.getMonth() +1; 
	var anoUs = dataUs.getFullYear();

	var idade = ano - anoUs
	
	suaIdade.innerHTML = ('Sua Idade é: '  + idade);

}

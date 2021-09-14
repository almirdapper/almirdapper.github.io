function verificar(){

	var numero = parseInt( document.getElementById('valor').value)
	if(numero % 2 === 0){
		resultado.innerHTML = numero + " é Par!"
	}else{
		resultado.innerHTML = numero + " é Impar!"
	}



}
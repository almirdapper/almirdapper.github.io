function pegar(btnID){

   let idValor = parseInt( document.getElementById('idValor').value);
   let idRaiz = parseInt( document.getElementById('idRaiz').value);
   if (idValor.length === 0 ){
   	alert("Favor Informar Todos Os Campos!");
   	document.getElementById('idRaiz').value = "";
   }else if (idRaiz.length ===0){
   	alert("Favor Informar Todos Os Campos!");
   	document.getElementById('idValor').value = "";
   }else{
   	document.getElementById('idRaiz').value = "";
   	document.getElementById('idValor').value = "";
  	if(btnID == 'bPA'){
  		calculaPA(idValor, idRaiz);
  	}else{
  		calcularPG(idValor,idRaiz);
  	}

  		
   }
}

function calculaPA(valor, raiz){
	let resultado = valor;

	for (var i = 1; i < 10 ;i++) {
		resultado = resultado + raiz;
	}
	alert('Progressão Aritmética 10 elemento:  '+resultado);
	return resultado;
	
}

function calcularPG(valor, raiz){
	let resultado = valor;

	for (var i = 1; i < 10 ;i++) {
		resultado = resultado * raiz;
	}
	alert('Progressão Geométrica 10 elemento:  '+resultado);
	return resultado;
}
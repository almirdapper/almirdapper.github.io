


class Quadrado{
	constructor(lado){
		this.lado = lado;
	}

	resposta(lado){
		return	alert('Lado OK');
	}
}

function teste(){
		console.log('Lado OK');
}



var btnAcessar = document.querySelectorAll('button');
debugger;
btnAcessar.addEventListener('click', function(evento){
	let elemento = evento.target;
	Quadrado.teste(elemento.value);
}); 

*/

console.log('Lado OK');
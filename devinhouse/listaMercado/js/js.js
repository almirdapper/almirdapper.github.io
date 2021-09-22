function verifica(){
	let valorEntrada = document.getElementById('idEntrada').value;

	if(valorEntrada.length=== 0){
		alert("Favor Informa  Produto para a Lista!");
	}else{
		addLista(valorEntrada);
		document.getElementById('idEntrada').value = "";
	}
}

let listaMercado = [];
id =0;
function addLista(valorEntrada){
	let span = document.createElement('span');
		span.innerHTML = valorEntrada;
		span.setAttribute('class', 'classSpan')
		span.setAttribute('id', id + 1);

	let option = document.createElement('option');
		option.setAttribute('value', valorEntrada);
		option.innerHTML = valorEntrada; 


	listaMercado.push(valorEntrada);
	idMostraLista.appendChild(span);
	idSelectLista.appendChild(option);

}

function salvarLista(){
	localStorage.setItem("listaMercado", JSON.stringify(listaMercado));
	alert("Lista Salva Com Sucesso!");
}

function carregarLista(){
	let listaStorage =JSON.parse(localStorage.getItem("listaMercado"));	

	if(listaStorage.length ===0){
		alert('Lista Vazia!');
	}else{
		for (var i = 0; i < listaStorage.length; i++) {
			let valorEntradaStorage = listaStorage[i];

		let span = document.createElement('span');
		span.innerHTML = valorEntradaStorage;
		span.setAttribute('class', 'classSpan')
		span.setAttribute('id', id + 1);

	let option = document.createElement('option');
		option.setAttribute('value', valorEntradaStorage);
		option.innerHTML = valorEntradaStorage;

	idMostraLista.appendChild(span);
	idSelectLista.appendChild(option); 

		}
	}
}

	document.addEventListener('keypress', function(e){
       if(e.which == 13){
          verifica();
       }
    }, false);




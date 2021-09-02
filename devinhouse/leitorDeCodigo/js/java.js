function verCodigo(){
	let codigo = document.getElementById('entradaCodigo').value

	if(codigo.length != 9 ){
		alert('Código Invalido!')

	}else{


	let modelo = codigo.substring(0,3)
	let lote = codigo.substring(3,5)
	let cor = codigo.substring(5,8)
	let voltagem = codigo.substring(8,9)

	switch (cor){
		case'001' : cor = 'Vermelho'
		break
		case'002' : cor = 'Preto'
		break
		case'003' : cor = 'Amarelo'
		break
		default: cor = 'Cor Não cadastrada!'
	}

	if (voltagem == '1') {
		voltagem = '110v'
	}else if (voltagem == '2')  {
		voltagem = '220v'
	}else{
		voltagem = 'voltagem Não Encontrada!'
	}
	

	document.getElementById('rModelo').innerText = modelo
	document.getElementById('rLote').innerText = lote
	document.getElementById('rCor').innerText = cor
	document.getElementById('rVoltagem').innerText = voltagem
	}

}
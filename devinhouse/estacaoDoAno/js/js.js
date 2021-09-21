
 
 window.onload = function pegaData(){


	let data = new Date();
	let dia = String(data.getDate()).padStart(2, '0');
	let mes = String(data.getMonth() + 1).padStart(2, '0');
	let diaInt = parseInt(dia);

	/*let verao =['12','01','02','03'];
	let outono =['03','04','05','06'];
	let inverno =['06','07','08','09'];
	let primavera = ['09','10','11','12'];*/

	let div = document.getElementById('imagem');	
	document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Verão"';





	switch (mes){
	
		case '01':
		div.setAttribute('style', 'background-image:  url("./imagens/verao.jpg"' );
		document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Verão';
		break;

		case '02':
		document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Verão';
		div.setAttribute('style', 'background-image:  url("./imagens/verao.jpg"' );
		break;

		case '03':
		if(diaInt <= 21){
			document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Verão';
			div.setAttribute('style', 'background-image:  url("./imagens/verao.jpg"' );
		}else{
			document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Outono';
			div.setAttribute('style', 'background-image:  url("./imagens/outono.jpg"' );
		}		
		break;

		case '04':
		document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Outono';
		div.setAttribute('style', 'background-image:  url("./imagens/outono.jpg"' );
		break;

		case '05':
		document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Outono';
		div.setAttribute('style', 'background-image:  url("./imagens/outono.jpg"' );
		break;

		case '06':
		if(diaInt <= 21){
			document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Outono';
			div.setAttribute('style', 'background-image:  url("./imagens/outono.jpg"' );
		}else{
			document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Inverno';
			div.setAttribute('style', 'background-image:  url("./imagens/inverno.jpg"' );
		}
		break;

		case '07':
		document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Inverno';
		div.setAttribute('style', 'background-image:  url("./imagens/inverno.jpg"' );
		break;

		case '08':
		document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Inverno';
		div.setAttribute('style', 'background-image:  url("./imagens/inverno.jpg"' );
		break;

		case '09':
		if(diaInt >=22){
			document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano a Primavera';
			div.setAttribute('style', 'background-image:  url("./imagens/primavera.jpg"' );
		 }else{

		 	document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano o Inverno';
		 	div.setAttribute('style', 'background-image:  url("./imagens/inverno.jpg"' );

		 }
		break;

		case '10':
		document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano a Primavera';
		div.setAttribute('style', 'background-image:  url("./imagens/primavera.jpg"' );
		break;

		case '11':
		document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano a Primavera';
		div.setAttribute('style', 'background-image:  url("./imagens/primavera.jpg"' );
		break;

		case '12':
		if(diaInt <= 21){
			document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano a Primavera';
			div.setAttribute('style', 'background-image:  url("./imagens/primavera.jpg"' );
		}else{
			document.getElementById('idH1').innerHTML = 'Estamos Na Estação do ano a Primavera';
			div.setAttribute('style', 'background-image:  url("./imagens/primavera.jpg"' );
		}
		break;



	}
	
}



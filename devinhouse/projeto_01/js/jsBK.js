		
	function teste(){
		let afazer = document.getElementById('inputEntradaID').value;
		if(afazer.length === 0){
			alert('Insira Uma descrição para seu Afazer!')
		}else{
			adicionaAfazeres(afazer);
			
		}

		
	}	
	var listaAfazeres =[];
	var idStorage =0 ;
	var idAfazer = 0;
	//cria lista
	function adicionaAfazeres (afazer){
		let textAfazer = afazer;
		idAfazer = idAfazer +1;
		let li = criaLi(afazer);
		listaAfazeres.push({idAfazer,afazer });
		ulAfazeresID.appendChild(li);
		localStorage.setItem("listaAfazeres", JSON.stringify(listaAfazeres));
		document.getElementById('inputEntradaID').value = "";
	}

	//cria li
	function criaLi(afazer){
		let id = Math.floor(Math.random()* 3000);

		let li = document.createElement('li');
		li.setAttribute('id', id);

		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('class', 'classInput');
		input.setAttribute('id', id + 1);
		input.setAttribute('onclick', "marcarAfazer(this.id)");

		let span = document.createElement('span');
		span.classList.add('textoAfazer');
		span.innerHTML = afazer;
		span.setAttribute('class', 'classSpan')
		span.setAttribute('id', id + 2);
		

		let btnExcluir = document.createElement('button');
		btnExcluir.setAttribute("class", 'classBtn');
		btnExcluir.setAttribute('id', id + 3)
		btnExcluir.setAttribute('onclick', 'excluirAfazer(this.id)')

		let div = document.createElement('div');
		div.setAttribute('class', 'classDiv');
		div.setAttribute('id', id + 4);
		btnExcluir.innerHTML = 'X';	

		div.appendChild(input);
		div.appendChild(span);		
		div.appendChild(btnExcluir);

		li.appendChild(div);
		console.log(li);
		return li;

		
		// Transformar o objeto em string e salvar em localStorage
		
	}

	function marcarAfazer(event){
	   let id = event;
	    let idSpan = parseInt(id)+1;
	    console.log(id);

	    

	   if (document.getElementById(id).checked){
			  document.getElementById(idSpan).setAttribute('style','text-decoration: line-through red 7px' );

		 }else{
			  document.getElementById(idSpan).setAttribute('style','text-decoration: none' );

		  }
		
			
	}

		function excluirAfazer(event){
 		    let id = event;
		    let idSpan = parseInt(id)+1; 
		    console.log(id);

		     var elem = document.getElementById(idSpan);
            elem.parentNode.removeChild(elem);
}


var idCaregaStorage = 0;
function caregaStorage(afazer){

			if (localStorage.hasOwnProperty("listaAfazeres")) {
    			JSON.parse(localStorage.getItem("listaAfazeres")).forEach(listaAfazeres => {
     		 console.log(listaAfazeres.afazer)
    	let id = listaAfazeres.idAfazer;
    	let afazer2 = listaAfazeres.afazer;
		//alert(pega[1]);
	
	//	let id = Math.floor(Math.random()* 3000);

		let li = document.createElement('li');
		li.setAttribute('id', id);

		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('class', 'classInput');
		input.setAttribute('id', id + 1);
		input.setAttribute('onclick', "marcarAfazer(this.id)");

		let span = document.createElement('span');
		span.classList.add('textoAfazer');
		span.innerHTML = afazer2;
		span.setAttribute('class', 'classSpan')
		span.setAttribute('id', id + 2);
		

		let btnExcluir = document.createElement('button');
		btnExcluir.setAttribute("class", 'classBtn');
		btnExcluir.setAttribute('id', id + 3)
		btnExcluir.setAttribute('onclick', 'excluirAfazer(this.id)')

		let div = document.createElement('div');
		div.setAttribute('class', 'classDiv');
		div.setAttribute('id', id + 4);
		btnExcluir.innerHTML = 'X';	

		div.appendChild(input);
		div.appendChild(span);		
		div.appendChild(btnExcluir);

		li.appendChild(div);
		console.log(li);
		adicionaAfazeres(li);
		return li;

		
		// Transformar o objeto em string e salvar em localStorage
		

				})
    	}
	}


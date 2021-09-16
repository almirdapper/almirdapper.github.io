		
	function teste(){
		let afazer = document.getElementById('inputEntradaID').value;
		if(afazer.length === 0){
			alert('Insira Uma descrição para seu Afazer!')
		}else{
			adicionaAfazeres(afazer);
			
		}

		
	}	

	//cria lista
	function adicionaAfazeres (afazer){
		let li = criaLi(afazer);
		//alert(afazer);
		ulAfazeresID.appendChild(li);
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

		let stor = li;
		// Transformar o objeto em string e salvar em localStorage
		localStorage.setItem('stor', JSON.stringify(stor));
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

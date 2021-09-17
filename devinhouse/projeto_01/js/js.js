		
	function teste(){
		let afazer = document.getElementById('inputEntradaID').value;
		if(afazer.length === 0){
			alert('Insira Uma descrição para seu Afazer!')
		}else{
			 criaLi(afazer);
		}
	}	

	

	var id = 0;
	var listaAfazeres =[];	
	function criaLi(afazer){
		let tarefa = afazer;		
		let sChecked  ;
		let nChecked  ;
		let spanDecor;


    	
	
		let li = document.createElement('li');
		li.setAttribute('id', id);

		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('class', 'classInput');
		input.setAttribute('id', id + 1);
		input.setAttribute('onclick', "marcarAfazer(this.id)");
		input.setAttribute(nChecked, sChecked);


		let span = document.createElement('span');
		span.classList.add('textoAfazer');
		span.innerHTML = tarefa;
		span.setAttribute('class', 'classSpan')
		span.setAttribute('id', id + 2);
		span.setAttribute('style', spanDecor );

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
		ulAfazeresID.appendChild(li);
		let idE = id +4;
		listaAfazeres.push({idE,tarefa, sChecked,nChecked,spanDecor});
		localStorage.setItem("listaAfazeres", JSON.stringify(listaAfazeres));
		id = id + 5 ;

			

	}





	function marcarAfazer(event){
	   let id = event;
	   let idSpan = parseInt(id)+1;
	   let idAlt = idSpan +2;
	   console.log(id);   

	   if (document.getElementById(id).checked){
			     document.getElementById(idSpan).setAttribute('style','text-decoration: line-through red 7px' );
			      const newUsersList = listaAfazeres.map((user, index, array) => {
					
					if(user.idE == idAlt){
					user.sChecked = true;
					user.nChecked = 'checked';
					user.spanDecor = 'text-decoration: line-through red 7px';
					return user;
				}
					
				  })

			       for (var i = 0; i < listaAfazeres.length; i++) {
			         let rrr = listaAfazeres[i];
	 		         console.log(rrr);
		          }

		}else{
			  document.getElementById(idSpan).setAttribute('style','text-decoration: none' );
			  	  const newUsersList = listaAfazeres.map((user, index, array) => {
					if(user.idE == idAlt){
					user.sChecked = undefined;
					user.nChecked = undefined;
					user.spanDecor = '';
					return user;
				}
				})
	    }

		  localStorage.setItem("listaAfazeres", JSON.stringify(listaAfazeres));
	}





	function excluirAfazer(event){
 		    let id = event;
		    let idSpan = parseInt(id)+1; 
		    var elem = document.getElementById(idSpan);
            elem.parentNode.removeChild(elem);


		var result = listaAfazeres.filter(function(el) {
		    let idd =el.idE == idSpan;
		    return idd;
		  });
		    	
		  for(var elemento of result){
		    var index = listaAfazeres.indexOf(elemento);    
		    listaAfazeres.splice(index, 1);
		  }

		  	for (var i = 0; i < listaAfazeres.length; i++) {
			let rrr = listaAfazeres[i];
			console.log(rrr);
		}

		localStorage.setItem("listaAfazeres", JSON.stringify(listaAfazeres));
}



function caregaStorage(event){
		 let listaStorage =JSON.parse(localStorage.getItem("listaAfazeres"));			

		 	for (var i = 0; i < listaStorage.length; i++) {
			let idE =listaStorage[i].idE;
    		let tarefa = listaStorage[i].tarefa;	
			let sChecked = listaStorage[i].sChecked ;
			let nChecked = listaStorage[i].nChecked ;
			let spanDecor = listaStorage[i].spanDecor;	
		    

		let li = document.createElement('li');
		li.setAttribute('id', id);

		let input = document.createElement('input');
		input.setAttribute('type', 'checkbox');
		input.setAttribute('class', 'classInput');
		input.setAttribute('id', id + 1);
		input.setAttribute('onclick', "marcarAfazer(this.id)");
		input.setAttribute(nChecked, sChecked);


		let span = document.createElement('span');
		span.classList.add('textoAfazer');
		span.innerHTML = tarefa;
		span.setAttribute('class', 'classSpan')
		span.setAttribute('id', id + 2);
		span.setAttribute('style', spanDecor );

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
		ulAfazeresID.appendChild(li);
		//let idE = id +4;
		listaAfazeres.push({idE,tarefa, sChecked,nChecked,spanDecor});
		localStorage.setItem("listaAfazeres", JSON.stringify(listaAfazeres));
		id = id + 5 ;
		}
	}

	window.onload = caregaStorage;
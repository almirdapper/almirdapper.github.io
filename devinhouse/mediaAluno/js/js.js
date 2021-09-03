function calcular(){

	let nomeAluno = document.getElementById('nomeAluno').value

	let notas = parseInt( document.getElementById('nota1').value) +
	            parseInt (document.getElementById('nota2').value) +
			    parseInt (document.getElementById('nota3').value) +
			    parseInt (document.getElementById('nota4').value) 
  
    let media = notas / 4

    let situacao = 'aprovado'
    if(media >= 7.5){
    	situacao = 'Aprovado'
    }else{
    	situacao = 'Reprovado'
    }


    let text1 = document.getElementById('textResultado').value;  
  
    let listaAlunos = []

    listaAlunos.push(["\n"+'Aluno:  '+ nomeAluno + "\n"+ 'Média:  '+ media + "\n"+ "Situação: "+ situacao 
    	+ "\n" + "--------------------------------------" +text1 ])

   

       for(let i =0 ; i < listaAlunos.length; i++){
    	document.getElementById('textResultado').value = listaAlunos[i]
    	 
    }


}

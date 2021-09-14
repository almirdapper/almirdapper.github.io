var valorA = parseInt( document.getElementById('idValorA').value)
var valorB = parseInt( document.getElementById('idValorB').value)
var resultado = 0;

function soma(){
var valorA = parseInt( document.getElementById('idValorA').value)
var valorB = parseInt( document.getElementById('idValorB').value)
var resultado = valorA + valorB
document.getElementById('idResultado').value = resultado
}

function subitrair(){
	var valorA = parseInt( document.getElementById('idValorA').value)
var valorB = parseInt( document.getElementById('idValorB').value)
var resultado = valorA - valorB
document.getElementById('idResultado').value = resultado
}

function multiplicar(){
	var valorA = parseInt( document.getElementById('idValorA').value)
var valorB = parseInt( document.getElementById('idValorB').value)
var resultado = valorA * valorB
document.getElementById('idResultado').value = resultado
}

function dividir(){
	var valorA = parseInt( document.getElementById('idValorA').value)
var valorB = parseInt( document.getElementById('idValorB').value)
var resultado = valorA / valorB
document.getElementById('idResultado').value = resultado
}


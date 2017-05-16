window.onload = function(){
	var botoncito = document.getElementById("demo");
	botoncito.addEventListener("click",saludar);
}

function saludar(){
	var anuncio = document.getElementById("anuncio");
	anuncio.innerHTML = "Hola Mundo"
}

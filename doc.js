//este codigo se ejecuta hasta que haya cargado toda la pagina
window.onload = function(){
	
	var btnCv=document.getElementById("curriculum");
	
	btnCv.addEventListener("click",scrollAutomatico);

	

	function scrollAutomatico(seccion) {
		console.log("bruno");
		window.scrollTo(0,document.body.scrollHeight);

	}






};
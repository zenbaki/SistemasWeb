
	
	
	var nameRe = /^[A-Za-z ]{3,20}$/;
	var emailRe = /^[a-z]+[0-9]{3}@ikasle\.ehu\.(es|eus)$/i 
	var telRe = /^[0-9]{9}$/;
	var passRe =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;

function validar(form){
	var nom = form.nombre.value;
	var email = form.correo.value;
	var password = form.password.value;
	var tel = form.telefono.value;
	var errors = [];
 
 	if (!nameRe.test(nom)) {
 	 errors[errors.length] = "Use only letters .";
 	}
 	if (!emailRe.test(email)) {
  	errors[errors.length] = "You must enter a valid email address.";
 	}
 	
 	if (!passRe.test(password)) {
  	errors[errors.length] = "Password must be at least 6 char long ";
 	}
 	if (!telRe.test(tel)) {
 	 errors[errors.length] = "Invalid telephone number";
 	}
 	if (errors.length > 0) {

  		reportErrors(errors);
  		return false;
 	}
	vervalores();
  	return true;
}

//show al errors on an alert
function reportErrors(errors){
 	var msg = "Error(s) found:\n";
 	for (var i = 0; i<errors.length; i++) {
 		var numError = i + 1;
  		msg += "\n" + numError + ". " + errors[i];
	}
 	alert(msg);
}
	
	//Add "other" textbox to form
	function addOther(){
		if(document.getElementById('especialidad').value=="Otra"){
			document.getElementById('otro').disabled=false;
			document.getElementById('otro').style.display="";
		}
		else{
			document.getElementById('otro').disabled=true;
			document.getElementById('otro').style.display="none";
		}
	}
function vervalores(){
		var sAux="";
		var frm = document.getElementById("registro");
		for (i=1;i<frm.elements.length;i++)
		{
			sAux += "NOMBRE: " + frm.elements[i].name + " ";
			sAux += "VALOR: " + frm.elements[i].value + "\n" ;
		}
		alert(sAux);
	}
var loadFile = function(event) {
    var output = document.getElementById('vista');
    output.src = URL.createObjectURL(event.target.files[0]);
  };


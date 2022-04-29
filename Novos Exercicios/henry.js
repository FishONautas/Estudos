window.onload = function() {
	var obj = document.getElementById("texto");
	obj.keypress = function () { //quando a tecla for pressionada
		document.getElementById("msg").innerHTML = "Tecla pressionada: " + key//event.key: tecla usada no evento (no caso, onkeypress)
																															+ " " + window.event.charCode//event.charCode: tecla usada no evendo em ASCII de unicode
																															+ " " + window.event.which;
	};
	obj.onkeyup = function (){ //quando a tecla for solta
	 document.getElementById("msg").innerHTML = "Tecla liberada (última tecla pressionada: " + event.key + " / " + window.event.which + " / " + window.charCode + ")";
	};
	//----------------DATA---------------
	var obj2 = document.getElementById("data");
	obj2.maxLength = 10;
	obj2.keypress = function () {
		if (window.event.keyCode < 48 || window.event.keyCode > 57 || window.event.keyCode == 32) {
			return false;
		}
		if (obj2.value.length == 2 || obj2.value.length == 5){
			obj2.value += "/";
		}
	}
	obj2.onkeyup = function (){ //quando a tecla for solta
		document.getElementById("msg").innerHTML = obj2.value;
	}
	var obj = document.getElementById("cpf");
	obj.maxLength = 14;
	obj.keypress = function () {
		if (window.event.keyCode < 48 || window.event.keyCode > 57) {
			return false;
		}
		if (obj.value.length == 3 || obj.value.length == 7) {
			obj.value += ".";
		}else if (obj.value.length == 11) {
			obj.value += "-";
		}
		obj.onkeyup = function () {
			document.getElementById("data"). innerHTML = obj.value;
		}
	}
};

function login(){
  "use strict";
  //OCULTAR LA SEGUNDA WEB
  document.getElementById("cabecera_aula").style.display = 'none';
  document.getElementById("lema_aula").style.display = 'none';
  document.getElementById("contenido_aula").style.display = 'none';
  // document.getElementById("cabecera").style.display = 'none';

  // ESTABLECIENDO LA FUNCIÓN TRAS CLICK EN EL BOTÓN DE LOGIN
  enviar.addEventListener("click", function(){
    // VARIABLE NOMBRE QUE CORRESPONDE AL USUARIO
		// var nombre = "";
		// TOMAR EL VALOR DEL INPUT #user
		var usuario = document.getElementById("user").value;
		// TOMAR EL VALOR DEL INPUT #password
		var contrasena = document.getElementById("password").value.toLowerCase();

    //OCULTAR LA PRIMERA WEB
    function ocultar_primera_web(){
      document.getElementById("cabecera").style.display = 'none';
      document.getElementById("lema").style.display = 'none';
      document.getElementById("contenido").style.display = 'none';
    }

    //MOSTRAR LA SEGUNDA WEB
    function mostrar_segunda_web(){
      document.getElementById("cabecera_aula").style.display = 'block';
      document.getElementById("lema_aula").style.display = 'block';
      document.getElementById("contenido_aula").style.display = 'block';
    }

    //INGRESANDO USUARIOS
    if (usuario == "admin" && contrasena == "admin"){
      // document.getElementById("cabecera").style.display = 'none';
      ocultar_primera_web();
      mostrar_segunda_web();
    }
    else if (usuario == "123" && contrasena == "123"){
      ocultar_primera_web();
    }
    else {
      // user.setAttribute("placeholder", "¡ERROR!");
      // password.setAttribute("placeholder", "¡ERROR!");
      document.getElementById("user").value="¡ERROR!";
      document.getElementById("password").value="";
    }
  });
  //FUNCION PARA EL CURSO CyT 3° SEMANA 2
  //FUNCION PARA EL CURSO CyT 3° SEMANA 3
  //FUNCION PARA EL CURSO CyT 3° SEMANA 4
}
window.onload=login();

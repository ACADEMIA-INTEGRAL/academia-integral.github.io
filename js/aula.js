function aula(){
  "use strict";
  //OCULTAR LA PRIMERA WEB
  // function ocultar_primera_web(){
  // document.getElementById("cabecera").style.display = 'none';
  // document.getElementById("contenido").style.display = 'none';
  // }
  //MANDAR ENLACES AL AULA
  //OCULTAR LECTURA COMPLEMENTARIA Y TAREA DOMICILIARIA
  //OCULTAR COMUNICATE Y EL VIDEO PARA MAXIMIZAR EN EL CELULAR
  document.getElementById("comunicate_aula").style.display = 'none';
  document.getElementById("video_aula_max").style.display = 'none';
  //FUNCION PARA EL CURSO CyT 3° SEMANA 1
  bio_sem1.addEventListener("click", function(){
    // var cyt3sem1 = document.getElementById("cyt3sem1");
    //OCULTANDO LA PRIMERA WEB Y EL LUGAR DEL VIDEO MAXIMIXADO
    // ocultar_primera_web();
    // document.getElementById("video_aula_max").style.display = 'none';
    //AGREGANDO TODA LA INFORMACIÓN DE AULA VIRTUAL
    document.getElementById("comunicate_aula").style.display = 'block';
    tema_semana.innerHTML = "Tema: Método Científico.";
    // fecha_presentacion.innerHTML = "Fecha de Presentación: 17 de Abril del 2020.";
    lectura_complementaria.setAttribute("href", "material/Lectura_Complementaria.pdf");
    tarea_domiciliaria.setAttribute("href", "material/Tarea_Domiciliaria.pdf");
    document.getElementById("video_aula_max").style.display = 'block';
    // video_aula.setAttribute("src", "https://drive.google.com/file/d/0B2EsL-JaXOMXNFFpVXNFYXUyZlU/preview");
    video_aula.setAttribute("src", "");
    // video_aula.setAttribute("src", "video/1.mp4");
    // video_aula.setAttribute("poster", "img/poster_ed.png");
    // video_aula.setAttribute("controls", "");
  });
  //FUNCION PARA EL CURSO CyT 3° SEMANA 2
  bio_sem2.addEventListener("click", function(){
    // var cyt3sem1 = document.getElementById("cyt3sem1");
    // ocultar_primera_web();
    // document.getElementById("video_aula_max").style.display = 'none';
    //AGREGANDO TODA LA INFORMACIÓN DE AULA VIRTUAL
    document.getElementById("comunicate_aula").style.display = 'block';
    tema_semana.innerHTML = "Tema: Los Seres Vivos.";
    // fecha_presentacion.innerHTML = "Fecha de Presentación: 24 de Abril del 2020.";
    lectura_complementaria.setAttribute("href", "material/gigantes_lectura.pdf");
    tarea_domiciliaria.setAttribute("href", "material/gigantes_tarea.pdf");
    document.getElementById("video_aula_max").style.display = 'block';
    video_aula.setAttribute("src", "");
    // video_aula.setAttribute("src", "https://youtu.be/W2mTMkA6DZg");
    // video_aula.setAttribute("poster", "img/poster_ed.png");
    // video_aula.setAttribute("controls", "");
  });
  //FUNCION PARA EL CURSO CyT 3° SEMANA 3
  //FUNCION PARA EL CURSO CyT 3° SEMANA 4
}
window.onload=aula();

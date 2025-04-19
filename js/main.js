function includeHTML(selector, file) {
    fetch(file)
      .then(res => res.text())
      .then(data => {
        const element = document.querySelector(selector);
        if (element) {
          element.innerHTML = data;
        } else {
          console.error(`No se encontró el elemento: ${selector}`);
        }
      });
  }
  
  function cargarPagina(ruta) {
    includeHTML("#contenido", ruta);
  }


  document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header", "paginas/header.html");
    includeHTML("footer", "paginas/footer.html");
    includeHTML("#contenido", "introduccion/indice.html");
    cargarPagina("introduccion/indice.html");
  });


function includeHTML(selector, file) {
  fetch(file)
    .then(res => res.text())
    .then(data => {
      const element = document.querySelector(selector);
      if (element) {
        element.innerHTML = data;
      }
    });
}

function cargarPagina(ruta) {
  includeHTML("#contenido", ruta);
  history.pushState({ ruta }, "", "#" + ruta);
}

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.ruta) {
    includeHTML("#contenido", e.state.ruta);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  includeHTML("header", "paginas/header.html");
  includeHTML("footer", "paginas/footer.html");

  const ruta = location.hash ? location.hash.substring(1) : "introduccion/indice.html";
  cargarPagina(ruta);
});




function navegarASeccion(select) {
  const destino = select.value;

  if (destino.startsWith('#')) {
    // Navegación dentro de la misma página
    const seccion = document.querySelector(destino);
    if (seccion) {
      seccion.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    // Navegación a otra página
    window.location.href = destino;
  }

  // Reiniciar select
  select.selectedIndex = 0;
}



  





let queryString = location.search;
let queryStringObjLiteral = new URLSearchParams(queryString);
let id = queryStringObjLiteral.get("id");

let urlArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}`;
let urlCancionesDelArtistas = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${id}/albums?limit=5`;
let seccionDetalleArtista = document.querySelector("#seccionDetalleArtista");
let seccionCancionesArtista = document.querySelector(".listaArtista");

console.log(id);

fetch(urlArtistas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    seccionDetalleArtista.innerHTML += `<article class="articuloDetalleArtista">
    <h1 class="tamanofuenteh1"> El artista es: ${data.name} </h1>
    <img src="${data.picture_medium}" alt="" class="imgalbum" id="imgArtistas">
    <h2 class="tamanofuenteh2">Top 5 Albums</h2>
    
</article>

`;
  })

  .catch(function (errores) {
    console.log(errores);
  });

let contenidoDeLista = " ";

fetch(urlCancionesDelArtistas)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);

    for (let i = 0; i < 5; i++) {
      contenidoDeLista += `<li>${data.data[i].title}</li>`;
    }

    seccionCancionesArtista.innerHTML += contenidoDeLista;
  })

  .catch(function (errores) {
    console.log(errores);
  });

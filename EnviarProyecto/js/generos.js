

let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre'

fetch(url).then(function (response) {
    return response.json()
    //agarro la info en json
})
.then(function (data) {
    console.log(data);
    let info = data.data
    
    let etiquetaElementos = document.querySelector('#contenedorgeneros')

    for (let i = 0; i < 5; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
       <a href="./detallle-genero.html?id=${info[i].id}">  <img class="imgalbum" src="${info[i].picture_medium} "</a>
       <a href="./detallle-genero.html?id=${info[i].id}"><h3 class="tamanofuenteh3">${info[i].name}</h3></a>
        </article>
        
        `
    }
    etiquetaElementos = document.querySelector('#contenedorgeneros2')
    for (let i = 5; i < 10; i++) {

        etiquetaElementos.innerHTML +=

        `
        <article class="">
        <a href="./detallle-genero.html?id=${info[i].id}">  <img class="imgalbum" src="${info[i].picture} "</a>
        <a href="./detallle-genero.html?id=${info[i].id}"><h3 class="tamanofuenteh3">${info[i].name}</h3></a>
         </article>
         
         `
    }
    etiquetaElementos = document.querySelector('#contenedorgeneros3')
    for (let i = 10; i < 15; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
       <a href="./detallle-genero.html?id=${info[i].id}">  <img class="imgalbum" src="${info[i].picture} "</a>
       <a href="./detallle-genero.html?id=${info[i].id}"><h3 class="tamanofuenteh3">${info[i].name}</h3></a>
        </article>
        
        `
    }
})
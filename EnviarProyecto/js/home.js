//!no sacar este espacio que hay, no se pq si lo sacamos se deja de renderizar todo
let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart'


let elementos = ''

fetch(url)

        .then(function (response) {
    return response.json()
    //agarro la info en json
})

        .then(function (dataTr) {
             //console.log(dataTr);
            let info = dataTr.tracks.data
            //console.log(info);
            
// Primer article ------ Canciones//
    let etiquetaElementos = document.querySelector('#contenedor')

    for (let i = 0; i < 5; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
       <a href="./detalle-cancion.html?id=${info[i].id}"><img class="imgalbum" src=${info[i].album.cover_medium}></a>
       <a href="./detalle-cancion.html?id=${info[i].id}"><p class="tamanofuenteh3">${info[i].title}</p></a>
       <a href="./detalle-artista.html?id=${info[i].artist.id}"><h3 class="tamanofuenteh3">${info[i].artist.name}</h3></a>
     
       
        
        </article>
        
        `

    }

// Segundo article ------ Artista//

    etiquetaElementos = document.querySelector('#contenedor2')
    for (let i = 5; i < 10; i++) {

        etiquetaElementos.innerHTML +=

        `
       <article class="">
       <a href="./detalle-artista.html?id=${info[i].artist.id}"><img class="imgalbum" src=${info[i].artist.picture_medium}></a>
       <a href="./detalle-artista.html?id=${info[i].artist.id}"><h3 class="tamanofuenteh3">${info[i].artist.name}</h3></a>
        </article> 
        `
    }



})
.catch(function (error) {
    console.log(error);
})  

// Tercer article ------ album//
fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')

.then(function (response) {
    return response.json(); 
})

.then(function(data) {   
console.log(data);
let primerosAlbumes = data.data.slice(0,6)  //agarro la informacion del data y elijo de que elemento a que elemento quiero usar

etiquetaElementos = document.querySelector('#contenedor3')
for (let i = 0; i < primerosAlbumes.length-1; i++) {

    etiquetaElementos.innerHTML +=

    `
   <article class="">

   <a href="./detalle-album.html?id=${primerosAlbumes[i].id}"><img class="imgalbum" src=${primerosAlbumes[i].cover_medium}></a>
   <a href="./detalle-album.html?id=${primerosAlbumes[i].id}"><p class="tamanofuenteh3">${primerosAlbumes[i].title}</p></a>
   <a href="./detalle-artista.html?id=${primerosAlbumes[i].artist.id}"><h3 class="tamanofuenteh3">${primerosAlbumes[i].artist.name}</h3></a>
 
   
    
    </article>
    `

}


})









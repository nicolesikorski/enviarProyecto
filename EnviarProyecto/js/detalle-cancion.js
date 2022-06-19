
let qs = location.search;
let qstoObjetoLiteral = new URLSearchParams(qs) //para convertir una querystring a un objeto literal
let id = qstoObjetoLiteral.get('id');
//defino el id

console.log(id);



let url = ` https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${id}`
console.log(url);

fetch(url)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)


        let image = document.querySelector('#imgDetalleCancion')
        let nombreCancion = document.querySelector('#nombreCancionn')
        let nombreArtista = document.querySelector('#texto')
        let nombreDisco = document.querySelector('#nombreAlbum')
        // let iframe = `<iframe title="deezer-widget" src="https://widget.deezer.com/widget/dark/track/${id}" width="100%" height="300" frameborder="0" allowtransparency="true" allow="encrypted-media; clipboard-write"></iframe>`
        // let player = document.querySelector("#sectionCanciones")

         image.src = data.album.cover_big
         nombreCancion.innerText = 'Canción:' + ' ' + data.title
         nombreArtista.innerText = 'Artista:' + ' ' + data.artist.name
         nombreDisco.innerText = 'Albúm:'+ ' ' + data.album.title 
        // player.innerHTML += iframe
        

    })



    //todo // creo un array para completar mas tarde


let miPlaylist = [];

//todo // recupero el storage

let recuperoStorage = localStorage.getItem('miPlaylist')

// todod // existe esa info?

if (recuperoStorage != null) { 

        miPlaylist = JSON.parse(recuperoStorage)
        
}

let fav = document.querySelector('.botonPlaylist')


if (miPlaylist.includes(id)) {
        
        fav.innerText = "Quitar de mi playlist"

}

fav.addEventListener('click', function (e) {
        
        e.preventDefault()

if (miPlaylist.includes(id)) {
        
//todo/ evaluo si el id existe en el array de fav

let indice = miPlaylist.indexOf(id)
miPlaylist.splice(indice,1)
fav.innerText = "Agregar a miPlaylist"

} else {

        miPlaylist.push(id);
        fav.innerText = "Quitar de mi playlist"
}

//todo/ subir al local storage

let favsJSON = JSON.stringify(miPlaylist)

localStorage.setItem('miPlaylist', favsJSON)





})


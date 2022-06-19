let qs = location.search;
let qstoObjetoLiteral = new URLSearchParams(qs) //para convertir una querystring a un objeto literal
let id = qstoObjetoLiteral.get('id');





//todo/ recupero localStorage

let recuperoStorage = localStorage.getItem('miPlaylist')

let playlistJS = JSON.parse(recuperoStorage)

let section = document.querySelector('#playlist')

let misCanciones = '';

//* el signo != es distinto / || es o || && es y\\  
if (playlistJS == null || playlistJS.length == 0) {
    
    section.innerHTML = '<p class="lista">No hay canciones en tu playlist actualmente</p>'


} else {
    
    for (let i = 0; i < playlistJS.length; i++) {
        
        let url = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/${playlistJS[i]}`

        fetch(url)
        .then(function (response) {
            
            return response.json()
        }).then(function (data) {
            
        
            // ?id=${infoTracks[i].id}
           
             misCanciones +=  `<article class="dispo-listado dispo-elementos">
                 <a href="./detalle-album.html?id=${data.album.id}">
                    <img class="img-generos" src="${data.album.cover_big}"/>
                 </a>
               
                <a href="./detalle-cancion.html?id=${data.id}">
                    <p class="lista">Canción:${data.title}</p>
                </a>
                
                <a href="./detalle-artista.html?id=${data.artist.id}">
                    <p class="lista">Artista:${data.artist.name}</p>
                </a>
                
                <a href="./detalle-album.html?id=${data.album.id}">
                    <p class="lista">Albúm:${data.album.title}</p>
                </a>
                
                <iframe src=${data.preview} frameborder="0"></iframe>
                </article>`
        



        section.innerHTML = misCanciones



        }).catch(function(errores) {
            console.log(errores)
        })

        
    }


}

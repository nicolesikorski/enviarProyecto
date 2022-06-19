
let urlArtist ='https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/'

function reDirect() {
    document.location = "./resultado-busqueda.html"
}
function searchArtist() {
    
    reDirect();
    
    let sectionResultado = document.querySelector('#resultadoBusquedaSection')

    let datoFormulario = document.querySelector('#busqueda').value //con el .value toma el dato que escribi en el formulario (para el valor que escribiste en el formulario)
    let ArtistaBuscar = `${urlArtist}${datoFormulario}` 
   

fetch(ArtistaBuscar)
        .then(function (response) {
            console.log(response); //imprime el estado de la promesa (estados de codigo), si el estado de la peticion es 200, que haga algo, sino que muestre el spinner, porque quiere decir que no se cargo
   
            if (response.status === 200) {
                return response.json() ;
    } else {
        sectionResultado.innerHTML +=  
        `
            <article>
            <img class="imgalbum" src="./img/spinner.gif"/>
            </article>
            `
    }         
})
        .then(function (data) {
            console.log(data);

        if (data.name) {
            sectionResultado.innerHTML =      //no le pongo += asi no me va sumando los distintos resultados de busqueda que hago y cada vez que pongo uno nuevo se va el anterior
            `
            <article>
            <h2 class="tamanofuenteh3">Tu resultado de busqueda...</h2>
            <img class="imgalbum" src=${data.picture_medium}>
            <a href="./detalle-artista.html?id=${data.id}"> <h3 class="tamanofuenteh3">${data.name}</h3></a>
            
            </article>
            `
        } else {
            alert('No hay resultados para tu busqueda')
        }
    
})
.catch(function (error) {
    console.log(error);
})

}


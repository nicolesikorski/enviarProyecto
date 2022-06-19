let campoBusqueda = document.querySelector('#busqueda')

let formBusqueda = document.querySelector('.ubiform')

formBusqueda.addEventListener('submit',function(e) {

    e.preventDefault()

    if (campoBusqueda.value == "" || campoBusqueda.value.length <=3 ) {
        
        alert('El campo está vacio o tiene menos de 3 caracteres')
    }
        
    
})



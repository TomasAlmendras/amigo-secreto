//Crear un array para almacenar los nombres
let amigosIngresados = [];

//Implementa una función para agregar amigos
function agregarAmigo(){

    validarListaAmigo();
    actualizarAmigo();
    console.log(amigosIngresados);
}

//Implementa una función para actualizar la lista de amigos
function actualizarAmigo(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    
    amigosIngresados.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}




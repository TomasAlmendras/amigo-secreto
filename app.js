//Crear un array para almacenar los nombres
let amigosIngresados = [];

//Implementa una función para agregar amigos
function agregarAmigo(){

    validarListaAmigo();
    actualizarAmigo();
    //test console.log(amigosIngresados);
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

function validarListaAmigo(){
    if (document.getElementById('amigo').value === ""){
        alert(`Por favor, inserte un nombre`);
    }else{
        amigosIngresados.push(document.getElementById('amigo').value);
        limpiarCaja();
    }
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}


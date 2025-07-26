// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

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

//agregarAmigo();
function sortearAmigo(){
    let amigoSorteado;
    if(amigosIngresados === ''){
        alert(`Debe ingresar un amigo antes de sortear`);
        validarListaAmigo();
    }else{
        amigoSorteado = Math.floor(Math.random(amigosIngresados.length)*amigosIngresados.length)+1;
        
        console.log(`indice del amigo sorteado: ${amigoSorteado}`);
    }
    
}

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function validarListaAmigo(){
    if (document.getElementById('amigo').value === ""){
        alert(`Por favor, inserte un nombre`);
    }else{
        amigosIngresados.push(document.getElementById('amigo').value);
        limpiarCaja();
    }
}



//Implementa una función para sortear los amigos


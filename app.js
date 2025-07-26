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

function sortearAmigo(){
    let indice, amigoSorteado;
    if(amigosIngresados === ''){
        alert(`Debe ingresar un amigo antes de sortear`);
        validarListaAmigo();
    }else{
        indice = Math.floor(Math.random()*amigosIngresados.length);
        amigoSorteado = amigosIngresados[indice];

        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

        console.log(`indice del amigo sorteado: ${amigoSorteado}`);
    }

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


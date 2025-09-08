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
    
   //mostramos la lista de amigos y como se actualiza 
    amigosIngresados.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

//Implementa una función para sortear los amigos
function sortearAmigo(){
    let indice, amigoSorteado;

    //verificamos que se haya ingresado al menos un nombre
    if(amigosIngresados.length === 0){
        alert(`Debe ingresar un amigo antes de sortear`);
    }else{
        //usamos math para sacar el indice y despues le damos ese valor a amigoSorteado
        indice = Math.floor(Math.random()*amigosIngresados.length);
        amigoSorteado = amigosIngresados[indice];

        document.getElementById('resultado').innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

        //console.log(`indice del amigo sorteado: ${amigoSorteado}`);
    }

}

//Valida amigo ingresado no sea vacio, sino que se ingrese el nombre al array
function validarListaAmigo(){

    let nombre = document.getElementById('amigo').value;

    if (nombre === ''){
        alert(`Por favor, inserte un nombre`);
    }else if (amigosIngresados.includes(nombre)){
        alert(`El nombre "${nombre}" ya está en la lista. Usá apellido o un apodo para diferenciarlo.`);
    }else{
        amigosIngresados.push(nombre);
        limpiarCaja();
    }
    
}

//Limpia la caja para ingresar otro amigo
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}


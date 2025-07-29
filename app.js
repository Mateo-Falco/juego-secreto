let numeroMaximo = 10;
let numeroSecreto= 0;
let contadorDeIntentos = 0;
let numerosSorteados = [];

condicionesIniciales();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
    return;
}


function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste en ${contadorDeIntentos} ${contadorDeIntentos == 1 ? 'intento':'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es menor');
            limpiarCaja();
            contadorDeIntentos++ ; 
        }
        if(numeroDeUsuario < numeroSecreto){
            asignarTextoElemento('p', 'El numero secreto es mayor');
            limpiarCaja();
            contadorDeIntentos++ ;
        }
    }
    return;
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}


function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';  
}


function generarNumeroAleatorio(){
    let numeroGenerado =  Math.floor(Math.random( )*numeroMaximo)+1;
    console.log (numeroGenerado);
    console.log (numerosSorteados);
    if (numerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', `Ya se sortearon los ${numeroMaximo} numeros posibles`)
    }
    else{
        if (numerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio(numeroMaximo);
        }
 
        else{
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }


    }
    }


function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto')
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}.`)
    numeroSecreto = generarNumeroAleatorio(numeroMaximo);
    contadorDeIntentos= 1;
}



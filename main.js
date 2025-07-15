window.addEventListener('load', inicio);

let syscall = new Sistema();

function inicio(){


    document.getElementById('idBoton').addEventListener('click', guardar);
    document.getElementById('botonGenerarPsw').addEventListener('click', generar);
    document.getElementById('botonCopiar').addEventListener('click', copiar);

}


function guardar(){

    let credencial = new Credencial();


    credencial.user = document.getElementById('username').value;
    credencial.password = document.getElementById('password').value;

    syscall.pushearCredencial(credencial);

}

function generar(){
    let random;
}

function copiar(){

}
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
    credencial.password = document.getElementById('psw').value;

    syscall.pushearCredencial(credencial);

}

function generar(){
    
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&()_-?/.,;:[]{}<>|';
  
  let result = '';

  const charactersLength = characters.length;

  for (let i = 0; i < 20; i++) {

    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    
}

    document.getElementById('generada').value = result;

  return result;

}




    



function copiar(){

    const text = document.getElementById('generada').value;
    navigator.clipboard.writeText(text)
      .then(() => console.log('Copied to clipboard!'))
      .catch(err => console.error('Failed to copy:', err));



}
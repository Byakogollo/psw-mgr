class Credencial {

    constructor (user, password){

        this.user = user;
        this.password = password;
    }

}

class Sistema {

    constructor(listaCredenciales){
        this.listaCredenciales = listaCredenciales;
    }


    pushearCredencial(credencial){

        this.listaCredenciales.push(credencial);

    }
    


}
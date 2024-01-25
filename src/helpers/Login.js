
export const Login = async(usuario) => {
    console.log(usuarios)
    const listaUsuarios= usuarios;
    const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuarios.email)
    if(usuarioBuscado){
        console.log("Email encontrado");
        if(usuarioBuscado.password === usuarios.password){
            console.log(usuarioBuscado)
            return usuarioBuscado;
        }else{
            console.log("password incorrecto")
            return null;
        }
    }else{
        console.log("email incorrecto")
        return null;
    }
}
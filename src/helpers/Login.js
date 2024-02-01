const URL_USUARIOS = import.meta.env.VITE_API_USUARIOS

export const Login = async (usuario) => {
    try {
        const respuesta = await fetch(URL_USUARIOS)
        const listaUsuarios= await respuesta.json();
        const usuarioBuscado = listaUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email)
        if(usuarioBuscado){
            console.log("Email encontrado");
            if(usuarioBuscado.password === usuario.password){
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
    } catch (error) {
        return null;
    }
}
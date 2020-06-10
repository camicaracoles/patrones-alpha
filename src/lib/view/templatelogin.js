import { loginGoogle, iniciarSesion, validarRegistro, restablecerContraseña } from '../index.js';
import { templatecrear } from './templatecrear.js';

export const templatelogin = () => {
    const divLogin = document.createElement('div');

    const viewLogin = `
        <div id="franjaUno">
            <div class="sandiasArriba">
                <img src="./img/sandias.jpg" id="sandiauno"></img>
            </div>
        </div>
    
        <div id="franjaDos">
            <img src="./img/titulo.png" id="titulo"></img>
        </div>
   
        <div id="franjaTres">       
            <div id="subtitulo">Que el arte siempre sea compartido </div>
        </div>

        <div id="contenedorIngreso">
            <div id="imagenUsuario">
             <img src="./img/usuario.jpg" id="imgUsuario"></img> 
            </div>
            <br> 
            <input id="email" placeholder="Correo electronico">
            <br>
            <input id="contraseña" placeholder="Contraseña">
            <br>
            <button id="iniciar"> Iniciar sesión</button>
            <br>
            <button id="google">
                <img src="./img/google.png" id="imgGoogle"></img>Sesión con Google 
            </button>
            <br>
            <button id="facebook">
                <img src="./img/iconofacebook.jpg" id="imgFacebook"></img>Sesión con Facebook 
            </button>
            <br>
            <p id="textoOlvido"> Olvidé mi contraseña</p>
            <p id="textoLogin">¿Aún no eres parte?</p>
            <br>
            <Button id="botonRegistrate">Registrate</Button>
        </div>  
    
        <div id="franjaCuatro">
            <div class="sandiasArriba">
                <img src="./img/sandias.jpg" id="sandiauno"></img>
            </div>
        </div>
        `
    divLogin.innerHTML = viewLogin;

    const btn = divLogin.querySelector('#google');
    btn.addEventListener('click', () => {
        loginGoogle()
    })

    const btnR = divLogin.querySelector('#botonRegistrate');
    btnR.addEventListener('click', () => {
        const cambioContenedor = document.getElementById('contenedorIngreso');
        cambioContenedor.innerHTML = registrologin().innerHTML;
        const btnConfirmarRegistro = cambioContenedor.querySelector('#botonRegistrateConfirmar');
        btnConfirmarRegistro.addEventListener('click', () => {
            console.log('validando...')
            validarRegistro()
        })
    })

    const btniniciar = divLogin.querySelector('#iniciar');
    btniniciar.addEventListener('click', () => {
        iniciarSesion()
        if (iniciarSesion === true) {
            const cambioRoot = document.getElementById('root');
            cambioRoot.innerHTML = templatecrear().innerHTML;
        }
    })

    const textoOlvide = divLogin.querySelector('#textoOlvido');
    textoOlvide.addEventListener('clik', () => {
        restablecerContraseña()
    })

    const registrologin = () => {
        const divRegistro = document.createElement('div');

        const registro = `
        <input id="emailR" placeholder="Correo electronico">
        <br>
        <input id="contraseñaR" placeholder="Contraseña">
        <br>
        <input id="nombreUsuario" placeholder="Nombre Usuario">
        <br>
        <Button id="botonRegistrateConfirmar">Registrate</Button>
        `
        divRegistro.innerHTML = registro;

        return divRegistro;
    }

    return divLogin;
}
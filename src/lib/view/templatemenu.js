export const templatemenu = () => {
    return `
        <div id="contenedorMenu">
            <div id="franjaUnoMenu">
                <div id="imagenUsuario">
                    <img src="./img/fotoUsuario.jpg" id="imgUsuario"></img>
                </div>
                <div id="textoNombreUsuario">Nombre Usuario</div>
                <button id="cerrarSesion">
                    <img src="./img/apagar.png" id="btnCerrar"></img>
                </button>
            </div>

            <div class="franjaDosMenu">
                <div id="miPerfil">Mi Perfil</div>
                <div id="crearDiseño">Crear Perfil</div>
                <div id="comunidad">Comunidad</div>
            </div>

        </div>
        `
}
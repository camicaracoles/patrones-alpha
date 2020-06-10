import { templatemenu } from './templatemenu.js';


export const templatecrear = () => {
    const divCrear = document.createElement('div');

    const viewCrear = `
        <div id="franjaUnoCrear">
            <div class="sandiasArriba">
                <img src="./img/sandias.jpg" id="sandiauno"></img>
            </div>
        </div>

        <div id="franjaDosCrear">${templatemenu()}</div>    

        <div id="franjaTresCrear">
            <img src="./img/arrastra.png" id="arrastra"></img>
        </div>

        <div id="franjaCuatroCrear">
    
            <div id="cuadroUno">
                <div id="cuadroMas">+</div>
                <div id="textoCuadroMAs">Cargar Imagen</div>
            </div>

            <div id="cuadroDos">
                <div id="contenedorVideo"> #Tutorial de uso
                    <a href="https://www.youtube.com/watch?v=btp8datAj7M&list=RDbtp8datAj7M&start_radio=1"></a>
                </div>
                <div id="textoVideo">ver video explicativo</div>
            </div>
        </div>


        <div id="franjaCincoCrear">
            <div id="panelUno"></div>
        </div>

        <div class="franjaSeisCrear">
            <div id="0,5">Plantilla 0,5 cm</div>
            <div id="1">Plantilla 1 cm</div>
            <div id="1,5">Plantilla 1,5 cm</div>
            <div id="2">Plantilla 2 cm</div>
        </div>

        <div id="franjaSieteCrear">
            <div id="botonAlPatron">Enviar al patron</div>
        </div>

        <div id="franjaOchoCrear">
            <div class="sandiasArriba">
                <img src="./img/sandias.jpg" id="sandiauno"></img>
            </div>
        </div>
        `
    divCrear.innerHTML= viewCrear;    
    return divCrear;
}
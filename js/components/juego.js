'use strict';
const FiltroSede = () => {
    const divSede = $('<div></div>');
    const label = $('<label class="rokkitt">Elige tu sede: </label>');
    const sede = $('<select class="roboto"><option>Perú</option><option>México</option></select>');
    const puntaje = $('<label class="rokkitt">Puntos: </label>');
    $(puntaje).css("float", "right");
    divSede.append(label);
    divSede.append(sede);
    divSede.append(puntaje);
    return divSede;
};
const Resultado = () => {
    const container = $('<div></div>');
    $(container).css({
        "background-color": "#333",
        "margin-top": "20px"
    });
    const foto = $('<img src="assets/img/peru/Ana Paula Verme.jpg">');
    $(foto).css({
        "width": "300px",
        "height": "300px"
    });
    const divResultado = $('<div></div>');
    $(divResultado).css({
        "float": "right",
        "width": "50%",
        "margin-top": "20px"
    });
    const lblNombre = $('<p class="rokkitt white">Ingresa su nombre: </p>');
    const nombre = $('<input type="text"></input><br>');
    const comprobar = $('<button class="white">COMPROBAR</button>');

    divResultado.append(lblNombre);
    divResultado.append(nombre);
    divResultado.append(comprobar);

    container.append(foto);
    container.append(divResultado);
    return container;
};

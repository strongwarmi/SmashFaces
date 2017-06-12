'use strict';
const FiltroSede = () => {
    const divSede = $ ('<div></div>');
    const label = $ ('<label class="rokkitt">Elige tu sede: </label>');
    const sede = $ ('<select class="roboto"><option>Perú</option><option>México</option></select>');
    const puntaje = $ ('<label class="rokkitt">Puntos: </label>');
    divSede.append(label);
    divSede.append(sede);
    divSede.append(puntaje);
    return divSede;
};
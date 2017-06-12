'use strict';
const Header = () => {
    const header = $ ('<header></header>');
    const titulo = $ ('<h1 class="rokkitt">Smash faces</h1>');
    const indicacion = $ ('<p class="roboto">Bienvenidas al juego de Smash Faces, tu misión es poder identificar a todas tus compañeras de clase ingresando para ello su nombre. Tiene 5 oportunidades antes de perder 1 punto y pasar a la siguiente.</p>');
    header.append(titulo);
    header.append(indicacion);
    return header;
};
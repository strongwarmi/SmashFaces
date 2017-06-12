'use strict';

const render = (root) => {
    root.empty();
    // Append components
    root.append(Header());
    root.append(FiltroSede());
    root.append(Resultado());


};

$(_ => {
    const root = $('.root');
    render(root);
});

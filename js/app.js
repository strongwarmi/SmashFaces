'use strict';

const render = (root) => {
    root.empty();
    // Append components
    root.append(Header());
    root.append(FiltroSede());
    root.append(Resultado());

/*    if (state.selectedMovie == null) {
        wrapper.append(MovieGrid( _ => {
            render(root);
        }));
    }else{
        wrapper.append(MovieDetails( _ => {
            render(root);
        }));
    }*/
    //wrapper.append(MovieGrid());
   // root.append(wrapper);    
};

/*const state = {
    movies: movies,
    selectedMovie: null
}*/

$( _ => {
    const root = $('.root');
    render(root);
});
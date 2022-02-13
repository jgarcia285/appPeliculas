import List from './list.js';
import Storage from './storage.js'
export default () => {

    const storage = new Storage();
    const list = new List();

    //Consigue datos de las peliculas disponibles
    let moviesStored = storage.getData();
    let moviesViewed = document.querySelectorAll(".item");

    moviesViewed.forEach(m => {
        //Captura el boton
        let deleteBtn = m.querySelector('.delete');

        deleteBtn.addEventListener('click', function () {
            //Trae el id de la pelicula a borrar y la elimina
            const movieId = this.getAttribute('data-id');
            const newMoviesStored = moviesStored.filter(m => m.id !== parseInt(movieId));

            storage.save(newMoviesStored);
            list.showList(newMoviesStored);
        })
    })

}
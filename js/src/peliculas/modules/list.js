import deleteOfList from './delete.js';
import editList from './edit.js';
export default class List {

    constructor() {
        this.content = document.querySelector("#content");
    }

    movieTemplate(movie) {
        return `<article class="item" id="movie-${movie.id}">
                    <h3 class="title">${movie.title}</h3>
                    <p class="review">${movie.review}</p>
                    <p class="rating">${movie.rating}</p>

                    <button class="edit" data-id="${movie.id}">Editar</button>
                    <button class="delete" data-id="${movie.id}">Borrar</button>
                </article>`;
    }

    //Vacia el DOM del contenedor y muestra el listado de peliculas
    showList(movies) {
        this.content.innerHTML = "";

        movies.forEach(m => {
            this.content.innerHTML += this.movieTemplate(m);
        });

        deleteOfList();

        editList();
    }

}
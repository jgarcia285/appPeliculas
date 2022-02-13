import Storage from './storage.js';
import List from './list.js';
export default class Add {

    constructor() {
        this.storage = new Storage();
        this.list = new List();
        this.title = document.querySelector('#title');
        this.review = document.querySelector('#review');
        this.rating = document.querySelector('#rating');
        this.addMovie = document.querySelector('#addMovie');
    }

    saveMovie() {
        this.addMovie.addEventListener('click', e => {
            e.preventDefault();

            //Consigue datos actualizados
            let moviesArr = this.storage.getData();
            let lastId = this.storage.getLastId();

            //Guarda datos
            let title = this.title.value;
            let review = this.review.value;
            let rating = parseInt(this.rating.value);

            console.log(typeof (rating));

            //Crea objeto a guardar en localStorage
            if (title !== "" && review !== "" && rating !== "") {
                if (typeof (rating) === "number" && rating <= 10 && rating >= 1) {
                    let movie = {
                        id: lastId++,
                        title,
                        review,
                        rating
                    };

                    moviesArr.push(movie);
                    this.storage.save(moviesArr);
                    //Actualiza el listado
                    this.list.showList(moviesArr);

                } else {
                    alert("Ingrese un puntaje valido (1 al 10)")
                }

            } else {
                alert("Completa todos los campos")
            }

            return false;
        })
    }

}
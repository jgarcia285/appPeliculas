export default class Storage {

    constructor() {
        this.id = 1;
    }

    getData() {
        let movies = JSON.parse(localStorage.getItem('pelicula'));

        if (!movies || movies.lenght < 1) {
            movies = [
                {
                    id: 0,
                    title: 'Batman',
                    review: 'Muy buena pelicula',
                    rating: 8
                }
            ];

            this.id = 1;

        } else {
            this.id = movies[movies.length - 1].id + 1;
        }

        return movies;
    }

    getLastId() {
        return this.id;
    }

    save(data) {
        localStorage.setItem('pelicula', JSON.stringify(data));
    }

}
import Storage from './storage.js';
import List from './list.js';

export default function () {

    const storage = new Storage();
    const list = new List();

    let moviesStored = storage.getData();
    let moviesViewed = document.querySelectorAll(".item");

    moviesViewed.forEach(m => {
        //Captura el boton
        let editBtn = m.querySelector('.edit');

        editBtn.addEventListener('click', function () {

            //Trae el id de la pelicula a editar
            const movieId = parseInt(this.getAttribute('data-id'));

            //Quita botones para que no interfieran en el formulario
            editBtn.remove();
            m.querySelector(".delete").remove();

            let movieEditHtml = `
            <div class="edit-form">
                <h3 class="title">Editar Pelicula</h3>
                <form>
                    <input type="text" class="edited-title" value="${m.querySelector(".title").innerHTML}">
                    <textarea class="edited-review">${m.querySelector(".review").innerHTML}</textarea>
                    <input type="text" class="edited-rating" value="${m.querySelector(".rating").innerHTML}">
                    <input type="submit" class="update" value="Actualizar">
                </form>
            </div>`;

            m.innerHTML += movieEditHtml;

            let updateBtn = m.querySelector('.update');

            updateBtn.addEventListener('click', e => {
                e.preventDefault();

                let index = moviesStored.findIndex(m => m.id === movieId);

                moviesStored[index] = {
                    id: index,
                    title: m.querySelector(".edited-title").value,
                    review: m.querySelector(".edited-review").value,
                    rating: m.querySelector(".edited-rating").value
                };

                storage.save(moviesStored);
                list.showList(moviesStored);

                return false;
            });

        })
    })
}
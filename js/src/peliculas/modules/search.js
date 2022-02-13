import Storage from "./storage.js";
import List from "./list.js";

export default function () {

    const storage = new Storage();
    const list = new List();

    let content = document.querySelector("#content");
    let searchBtn = document.querySelector("#btnSearch");

    searchBtn.addEventListener('click', e => {
        e.preventDefault();

        //Texto introducido en el campo de busqueda
        let searchField = document.querySelector("#searchField").value;

        let moviesStored = storage.getData();
        const newMovies = moviesStored.filter(m => m.title.toLowerCase().includes(searchField.toLowerCase()));

        if (newMovies.length <= 0) {
            content.innerHTML = `<div><h2 class="searchError">No hay coincidencias...</h2></div>`;
        } else {
            list.showList(newMovies);
        }



        return false;
    });


}
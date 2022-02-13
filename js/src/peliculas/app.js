import Add from './modules/add.js';
import List from './modules/list.js';
import Storage from './modules/storage.js';
import Search from './modules/search.js';

export default class App {

    constructor() {
        this.add = new Add();
        this.list = new List();
        this.storage = new Storage();
    }

    load() {
        this.add.saveMovie();

        const movies = this.storage.getData();

        this.list.showList(movies);

        Search();
    }

}
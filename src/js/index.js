import {elements} from './views/base';
import * as searchView from './views/SearchView'
import Search from './models/Search';

/*global state of the app*/
const state = {};

const controlSearch = async() => {
    const query = searchView.getInput();

    if (query){
        // new search object 
        state.search = new Search(query);

        await state.search.getResults();
        //console.log(state.search.result);

        searchView.renderResults(state.search.result);
    }   
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});






import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/SearchView'
import Search from './models/Search';

/*global state of the app*/
const state = {};

const controlSearch = async() => {
    const query = searchView.getInput();

    if (query){
        // new search object 
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);


        await state.search.getResults();
        //console.log(state.search.result);
        clearLoader();
        searchView.renderResults(state.search.result);
    }   
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});

elements.searchResPages.addEventListener('click', e =>{
    
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto,10);
    }
});





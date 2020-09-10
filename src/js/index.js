import Search from './models/Search';

/*global state of the app*/
const state = {};

const controlSearch = () => {
    const query = 'pizza'

    if (query){
        state.search = new Search(query);
    }       
}

document.querySelector('.search').addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});



search.getResults();


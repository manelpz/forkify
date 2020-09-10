import Search from './models/Search';

/*global state of the app*/
const state = {};

const controlSearch = async() => {
    const query = 'pizza'

    if (query){
        // new search object 
        state.search = new Search(query);

        await state.search.getResults();
        console.log(state.search.result);
    }   
}

document.querySelector('.search').addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});






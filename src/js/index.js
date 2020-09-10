import Search from './models/Search';

/*global state of the app*/
const state = {};

const controlSearch = () => {
    const query = 'pizza'
}

document.querySelector('.search').addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});


const search = new Search('pizza');
console.log(search);

search.getResults();


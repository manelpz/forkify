import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/SearchView';
import * as recipeView from './views/RecipeView';
import Search from './models/Search';
import Recipe from './models/Recipe';

/*global state of the app*/
const state = {};



const controlSearch = async() => {
    const query = searchView.getInput();
    //const query = 'pizza';


    if (query){
        // new search object 
        state.search = new Search(query);

        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchRes);

        try{
        await state.search.getResults();
        //console.log(state.search.result);
        clearLoader();
        searchView.renderResults(state.search.result);
        }catch(error){
            alert("something wrong with the search");
            clearLoader();
        }
    }   
}

elements.searchForm.addEventListener('submit', e=>{
    e.preventDefault();
    controlSearch();
});



elements.searchResPages.addEventListener('click', e =>{
    //console.log("hi");
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto,10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

const controlRecipe = async() => {
    const id = window.location.hash.replace('#','');
    //console.log(id);

    if(id){
        renderLoader(elements.recipe);
        state.recipe  = new Recipe(id);

        window.r  = state.recipe;

        try{
                await state.recipe.getRecipe();

                state.recipe.parseIngredients();
                state.recipe.calcTime();

                state.recipe.calcServings();

                //console.log(state.recipe);
                clearLoader();
                recipeView.renderRecipe(state.recipe);

        }catch(error){
            alert("error processing recipe");
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));


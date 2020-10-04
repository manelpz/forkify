import {elements, renderLoader, clearLoader} from './views/base';
import * as searchView from './views/SearchView';
import * as recipeView from './views/RecipeView';
import * as listView from './views/listView';
import Search from './models/Search';
import Recipe from './models/Recipe';
import List from './models/List';

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
    console.log(id);

    if(id){

        recipeView.clearRecipe();
        renderLoader(elements.recipe);
        state.recipe  = new Recipe(id);

        if(state.search) searchView.highlightSelected(id);

        window.r  = state.recipe;

        try{
                await state.recipe.getRecipe();
                state.recipe.parseIngredients();
                state.recipe.calcTime();

                state.recipe.calcServings();

                clearLoader();
                recipeView.renderRecipe(state.recipe);

        }catch(error){
            alert("error processing recipe 3");
        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));

const controlList = () =>{
    if(!state.list) state.list = new List();

    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });
};

elements.recipe.addEventListener('click', e => {

    if(e.target.matches('.btn-decrease, .btn-decrease *')){
       if(state.recipe.servings > 1){
        state.recipe.updateServings('dec');
        recipeView.updateServingsIngredients(state.recipe);
       }
    }else if(e.target.matches('.btn-increase, .btn-increase *')){
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredients(state.recipe);
    }else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
    }
    //console.log(state.recipe);
});

window.l = new List();

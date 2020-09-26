import axios from 'axios';
import {proxy} from  '../config.js';

export default class Recipe {

    constructor(id){
        this.id  = id;
    }

    async getRecipe(){
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
            this.title = res.data.recipe.tittle;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;

        }catch(error){
            console.log(error);
            alert('Something went wrong :(');
        }
    }

     calcTime(){
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

     calcServings(){
        this.servings = 4;
    }

    parseIngredients(){
        const unitsLong = ['tablespoons', 'tablespoon','ounce','ounces','teaspoon','teaspoons','cups','pounds'];
        const unitShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp','cup','pound'];

        const newIngredients = this.ingredients.map(el=>{

            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit,i) =>{
                ingredient = ingredients.replace(unit,unitShort[i]);
            });
        });
        this.ingredients = newIngredients;
    }

}
import axios from 'axios';
import {proxy} from  '../config.js';
export  default class Recipe {

    constructor(id){
        this.id  = id;
    }

    async getRecipe(){
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/`);
        }catch(error){
            console.log(error);
        }
    }


}
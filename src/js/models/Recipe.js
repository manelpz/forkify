import axios from 'axios';
import {proxy} from  '../config.js';

export default class Recipe {

    constructor(id){
        this.id  = id;
    }

    async getRecipe(){
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
        console.log(res);
        }catch(error){
            console.log(error);
        }
    }


}
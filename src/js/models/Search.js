
import axios from 'axios';
import {proxy} from  '../config.js';

export default class search{
    constructor(query){
        this.query = query;
    }

    async getResults(query){
        //const proxy = 'https://api.allorigins.win/get?url=';
        
        try{
        const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);
        this.result = res.data.recipes;
        //console.log(this.result);
        }catch(error){
            alert(error);
        }
    }
}










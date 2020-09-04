import axios from 'axios';

async function getResults(query){
    const proxy = 'https://api.allorigins.win/get?url=';
    
    try{
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
    const recipies = res.data.recipes;
    console.log(recipies);
    }catch(error){
        alert(error);
    }
}
getResults('pizza');
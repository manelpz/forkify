import axios from 'axios';

async function getResults(query){
    const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
    //const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=pizza`);
    console.log(res);
}
getResults('pizza');
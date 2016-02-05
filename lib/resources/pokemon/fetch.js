import superagent from 'superagent';
import model from '../../pokemon-model';
let cache = {};

// fetch:: {Key:String}-> Promise
export default ({resource})=>{
    return new Promise((resolve, reject)=>{
        if (cache[resource]) resolve(cache[resource]);
        superagent
            .get(`http://pokeapi.co/${resource}`)
            .end((err, result)=>{
                if (err) reject(err);
                model(result.body)
                    .then((poke)=> {
                        cache[resource] = poke;
                        resolve(poke);
                    });
            });
    });
};

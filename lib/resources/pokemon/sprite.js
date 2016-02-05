import superagent from 'superagent';
import R from 'ramda';
let cache = {};
export default ({resource_uri})=>{
    return new Promise((resolve, reject)=>{
        if (cache[resource_uri]) resolve(cache[resource_uri]);
        superagent
            .get(`http://pokeapi.co/${resource_uri}`)
            .end((err, res)=>{
                if (err)reject(err);
                const img = R.concat('http://pokeapi.co', res.body.image);
                cache[resource_uri] = img;
                resolve(img);
            });
    });
};

import superagent from 'superagent';
import R from 'ramda';
export default ({resource_uri})=>{
    return new Promise((resolve, reject)=>{
        superagent
            .get(`http://pokeapi.co/${resource_uri}`)
            .end((err, res)=>{
                if (err)reject(err);
                resolve(R.prop('description', res.body));
            });
    });
};

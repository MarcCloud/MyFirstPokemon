import api from './resources';
import { all } from 'when';
import { map } from 'ramda';
//::fetchAll [{Key:String}]=> Promise
export default (list)=>{
    return all(map(api.pokemon.fetch, list));
};

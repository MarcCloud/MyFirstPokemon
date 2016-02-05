import { Observable } from 'rx';
import fetchAll from '../lib/fetchAll';
import starterNames from './starter-list';

export default ({pokemonList, detail}) => {
    const starters$ = pokemonList.length ? Observable.just(pokemonList) : Observable.fromPromise(fetchAll(starterNames));
    const detail$ = Observable.just(detail);
    return Observable.combineLatest(starters$, detail$,
                                    (pokes, deets)=>({pokemonList: pokes, detail: deets}));
};

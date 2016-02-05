import React from 'react';
import R from 'ramda';
import Detail from './view';
import PokeThumb from '../components/poke-thumb';
import appState$ from '../state';
import App from '../';
export default ({params})=>{
    return appState$({pokemonList: [], detail: params.name })
                .map(state => {
                    const choosenPokemon = R.find(R.propEq('name', state.detail), state.pokemonList);
                    return { content: <App>
                                            <div className="ui grid">
                                                <ul className="eight wide column">{R.map((pokemon)=> <PokeThumb {...pokemon}/>, state.pokemonList)}</ul>
                                                <Detail {...choosenPokemon}/>
                                            </div>
                                      </App>,
                             state};
                });
};

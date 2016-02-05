import React from 'react';
import R from 'ramda';
import pokeThumb from '../components/poke-thumb';
import appState$ from '../state';
import App from '../';


export default ({url, params, query})=> {
    return appState$({pokemonList: [], detail: 0})
                .map((state)=> { return { content: <App><ul>{R.map(pokeThumb, state.pokemonList)}</ul></App>, state};});
};

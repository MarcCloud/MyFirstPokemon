import React from 'react';
import PokeThumb from '../components/poke-thumb';

export default (pokemon)=>{
    return <section className="eight wide column">
                <div className="row right floated action">
                    <a className="ui button" href="/" title="Close"> >> </a>
                </div>
                <div className="row right floated picture">
                    <PokeThumb {...pokemon} />
                </div>
                <div className= "row right floated description">
                    <h3>Pokedex Entry</h3>
                    <p>{pokemon.description}</p>
                </div>
                <div className=" row right floated stats">
                    <h3>Base Stats</h3>
                    <div className="ui list">
                        <div className="item"><label>HP: </label><span>{ pokemon.stats.hp }</span></div>
                        <div className="item"><label>Atk: </label><span>{ pokemon.stats.attack }</span></div>
                        <div className="item"><label>Def: </label><span>{ pokemon.stats.defense }</span></div>
                        <div className="item"><label>Sp.Atk: </label><span>{ pokemon.stats.sp_atk }</span></div>
                        <div className="item"><label>Sp.Def: </label><span>{ pokemon.stats.sp_def }</span></div>
                        <div className="item"><label>Spd: </label><span>{ pokemon.stats.speed }</span></div>
                    </div>
                </div>
            </section>;
};

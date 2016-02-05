import when from 'when';
import api from './resources';
export default ({national_id, name, sprites, abilities, descriptions, evolutions, height, weight, attack, defense, sp_atk, sp_def, hp, speed, types}) => {
    return when.all([api.pokemon.sprite(sprites[0]), api.pokemon.description(descriptions[0])])
            .then((values)=>{
                return {
                    id: national_id,
                    name,
                    sprite: values[0],
                    abilities,
                    description: values[1],
                    evolutions,
                    height,
                    weight,
                    stats: {
                        attack,
                        defense,
                        sp_atk,
                        sp_def,
                        speed,
                        hp
                    },
                    types
                };
            }).catch((err)=> console.error(err));
};

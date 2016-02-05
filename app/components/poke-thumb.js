import React from 'react';
// PokeThumb:: {Key: Prop} -> Component
export default (props)=>{
    return <div key={props.id} className="ui segment">
                <img src={props.sprite} alt={props.name} title={props.name} className="ui centered small image"/>
                <a className="ui centered" href={`/detail/${props.name}`}>{props.name}</a>
           </div>;
};

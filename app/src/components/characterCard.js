import React from 'react';

const CharacterCard = props =>{
    // console.log('props given to Card',props)
    return(
        <div className='card'>
            <h2 className='charName'>{props.char.name}</h2>
    <h3>Also known as: {props.char.nickname}</h3>
    <img className='charImg' src= {props.char.img} alt={props.char.name}/>
    <p>The character {props.char.name} was played by the actor/actress {props.char.portrayed}. Throughout the show {props.char.name} had the following occupations: {(props.char.occupation.length > 0) ? <span>{props.char.occupation}</span> : <span>No known occupations</span>}. The status of {props.char.name} is now {props.char.status}</p>
        </div>
    )
}

export default CharacterCard
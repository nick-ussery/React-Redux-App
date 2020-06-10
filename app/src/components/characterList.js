import React from 'react';
import CharacterCard from './characterCard'
import {connect} from 'react-redux'

const CharacterList = (props) =>{
    // console.log('props given to CHaracterList', props)
    return(
        <div>
            {props.characters.map(character=>{
                return <CharacterCard key={character.id} char={character} />
            })}
        </div>
    )
}

const mapStateToProps = state=>{
    console.log('state in CharacterList', state)
    return{
        characters: state.characters
    }
}


export default connect(mapStateToProps, {})(CharacterList)
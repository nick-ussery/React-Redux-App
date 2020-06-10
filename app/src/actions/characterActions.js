import axios from 'axios'

export const fetchCharacterList = () =>{
    console.log('fetching character list')
    return dispatch =>{
        dispatch({type: 'FETCH_CHARACTER_LIST_START'})
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then(res=>{
            dispatch({type: 'FETCH_CHARACTER_LIST_SUCCESS', payload: res.data})
        })
        .catch(err=>{
            dispatch({type: 'FETCH_CHARACTER_LIST_FAILURE', payload: `${err.response.status}: ${err.response.data}`})
        })
}}


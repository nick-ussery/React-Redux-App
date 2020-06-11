import React from 'react';

export const initialState={
    characters: [],
    isFetching: false,
    err: '',
 
}

export const characterReducer = (state=initialState, action) =>{
    console.log(action)
    switch(action.type){
        case 'FETCH_CHARACTER_LIST_START':
            return {
                ...state,
                isFetching: true
            }
        case 'FETCH_CHARACTER_LIST_SUCCESS':
            return{
                ...state,
                isFetching: false,
                characters:action.payload,
                err: ''
            }
        case 'FETCH_CHARACTER_LIST_FAILURE':
            return{
                ...state,
                isFetching: false,
                err: action.payload
            }
        default: return state
    }
}
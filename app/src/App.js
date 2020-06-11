import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import CharacterList from './components/characterList'
import {connect} from 'react-redux'
import {fetchCharacterList} from './actions/characterActions'

function App(props) {
const [searchBar, setSearchBar] = useState('')
  useEffect(()=>{
    props.fetchCharacterList(searchBar);
  },[searchBar])

  const handleChange =e =>{
    setSearchBar(e.target.value)
  }
  return (
    <div className="App">
      <h1>Breaking Bad</h1>
      <input type='text'
      placeholder='SEARCH'
      value = {props.searchBar}
      onChange={handleChange}
      />
      <CharacterList />
    </div>
  );
}

const mapStateToProps = state=>{
  return state
}

export default connect(mapStateToProps, {fetchCharacterList})(App);

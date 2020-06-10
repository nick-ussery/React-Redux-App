import React from 'react';
import './App.css';
import axios from 'axios'
import CharacterList from './components/characterList'
import {connect} from 'react-redux'
import {fetchCharacterList} from './actions/characterActions'

function App(props) {

  axios.get('https://www.breakingbadapi.com/api/characters/')
  .then(res=>{
    console.log(res.data)
  })
  .catch( err=>{console.log(err)})
  return (
    <div className="App">
      Breaking Bad
      <CharacterList className="list" />
      <button onClick={()=>{props.fetchCharacterList()}}>Get Characters</button>
    </div>
  );
}

const mapStateToProps = state=>{
  return state
}

export default connect(mapStateToProps, {fetchCharacterList})(App);

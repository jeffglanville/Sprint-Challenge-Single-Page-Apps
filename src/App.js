import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";
import {Route} from 'react-router-dom';
import CharacterCard from "./components/CharacterCard.js";
import axios from 'axios';

function App() {
  const [char, setChar] = useState({});

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then((res) => setChar(res.data.results))
      .catch((err) => console.log(err));
  })
  return (
    <main>
      <Route exact path = "/">
      <WelcomePage />
      </Route>
      <Header />
      <SearchForm />
      <CharacterCard char = {char} setChar = {setChar}/>
      <CharacterList />

    </main>
  );
}


export default App;
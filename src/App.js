import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";
import {Route} from 'react-router-dom';

function App() {
  return (
    <main>
      <Route path = "/" component = {Header} />
      <SearchForm />
      <Route path = "/CharacterList/:id" />
      <CharacterList />
    </main>
  );
}


export default App;
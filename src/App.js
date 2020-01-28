import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";
import WelcomePage from "./components/WelcomePage.js";
import {Route} from 'react-router-dom';
import CharacterCard from "./components/CharacterCard.js";

function App() {
  return (
    <main>
      <Route exact path = "/">
      <WelcomePage />
      </Route>
      <Header />
      <SearchForm />
      <CharacterCard />
      <CharacterList />

    </main>
  );
}


export default App;
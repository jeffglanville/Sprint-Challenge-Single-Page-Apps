import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList.js";
import SearchForm from "./components/SearchForm.js";

function App() {
  return (
    <main>
      <Header />
      <SearchForm />
      <CharacterList />
    </main>
  );
}


export default App;
import React, { useEffect, useState } from "react";
import Axios from "axios";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState({});

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get('https://rickandmortyapi.com/api/character/')
    .then((res) => {
      setCharacter(res.data)
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);

  return(
    <h2>Character List</h2>
  )
}

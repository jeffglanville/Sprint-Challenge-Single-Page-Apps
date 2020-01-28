import React, {useState, useEffect} from "react";
import axios from 'axios';



export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);


    useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then((res) => {
      setCharacter(res.data.results)
    });
  },[])


  return (
    <div>
      {character.map((char) => {
        return (
          <p>{char.name}</p>
        )
      })}
    </div>
  )
}

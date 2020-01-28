import React, { useEffect, useState } from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';




export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const {id} = useParams();
  const [character, setCharacter] = useState({});


    useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
    .get(`https://rickandmortyapi.com/api/character?i=${id}`)
    .then((res) => {
      console.log(res)
      setCharacter(res.data.results[0])
    });
  },[id])


  return (
    <div>
      {character &&
      <div>
        <h2>Name: {character.name}</h2>
        <p>Status: {character.status}</p>
        <p>Species: {character.species}</p>
        <p>Type: {character.type}</p>
        <p>Gender: {character.gender}</p>
      </div>
      }
    </div>

  )
}





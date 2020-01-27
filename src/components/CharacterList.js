import React, { useEffect, useState } from "react";
import Axios from "axios";
import {useParams} from 'react-router-dom';


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const {id} = useParams;
  const [results, setResults] = useState({});

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get(`https://rickandmortyapi.com/api/character?i=${id}`)
    .then((res) => {
      setResults(res.data.results[0])
    })
    .catch((err) => {
      console.log(err);
    });
  }, [id]);

  return(
    <div>
      {results &&
      <div>
        <p>Name: {results.name}</p>
        <p>Status: {results.status}</p>
        <p>Species: {results.species}</p>
        <p>Type: {results.type}</p>
        <p>Gender: {results.gender}</p>
      </div>
      }
    </div>
  )
}

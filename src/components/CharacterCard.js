import React from "react";

export default function CharacterCard(props) {
  const {char} = props;



  return (
  <div className = "card-wrapper">
    <p>Name: {char.name}</p>
    <p>Status: {char.status}</p>
    <p>Species: {char.species}</p>
    {char.type ? <p>Type: {char.type}</p> : ""}
    <p>Gender: {char.gender}</p>
  </div>
  );
}
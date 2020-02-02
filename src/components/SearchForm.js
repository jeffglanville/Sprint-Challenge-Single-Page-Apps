import React, {useState, useEffect} from "react";
import {useParams, useHistory} from 'react-router-dom';



function SearchForm(props) {
  const {char, setChar} = props;
  const {type} = useParams();
  const history = useHistory();
  const [character, setCharacter] = useState({});
  const [input,setInput] = useState('');

  useEffect (() => {
    const character = char.filter((character) => {
      return character.type === type;
    });
    setCharacter(character);
  }, [char,type]);
  if (!character){

    return <h1>This is not a Rick and Morty character!</h1>
  }
  const onSubmit = e => {
    e.preventDefault();
    const editChar = char.filter(character => {
      return character.type !== type
    })
    const character = {
      name: input,
      status: input,
      species: input,
      type: input,
      gender: input
    }
    setChar([...editChar, character])
    history.push('/')
  }


  return (
    <section className="search-form">
     <form onSubmit={(e) => onSubmit(e)}>
       <input type = "text" onChange = {(e) => setInput(e.target.value)} name = "name" placeholder = "Name"  />
       <input type = "text" onChange = {(e) => setInput(e.target.value)} name = "status" placeholder = "Status"  />
       <input type = "text" onChange = {(e) => setInput(e.target.value)} name = "species" placeholder = "Species"  />
       <input type = "text" onChange = {(e) => setInput(e.target.value)} name = "type" placeholder = "Type"  />
       <input type = "text" onChange = {(e) => setInput(e.target.value)} name = "gender" placeholder = "Gender"  />
      <button type = "submit">Submit</button>
     </form>
    </section>
  );
}


export default SearchForm;
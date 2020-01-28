import React from "react";


export default function SearchForm(props) {
const [char, setChar] = props;

const handleChange = e => {
  setChar({...char, [e.target.name]: e.target.value});
}

const handleSubmit = e => {
  e.preventDefault();
  const newToon = {name: char.name, status: char.status, species: char.species, type: char.type, gender: char.gender}
  setChar({...char, characters:[...char.characters, newToon]});
};

if(!char){
  return <h1>Sorry that is not a Rick and Morty Character!</h1>
}

  return (
    <section className="search-form">
     <form onSubmit = {e => handleSubmit(e)}>
       <input type = "text" value = {char.name} name = "name" placeholder = "Name" onChange = {e => handleChange(e)} />
       <input type = "text" value = {char.status} name = "status" placeholder = "Status" onChange = {e => handleChange(e)} />
       <input type = "text" value = {char.species} name = "species" placeholder = "Species" onChange = {e => handleChange(e)} />
       <input type = "text" value = {char.type} name = "type" placeholder = "Type" onChange = {e => handleChange(e)} />
       <input type = "text" value = {char.gender} name = "gender" placeholder = "Gender" onChange = {e => handleChange(e)} />
      <button type = "submit">Submit</button>
     </form>
    </section>
  );
}

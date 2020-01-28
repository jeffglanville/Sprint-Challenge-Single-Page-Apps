import React, { useState} from "react";


export default function SearchForm(props) {
  const [char, setChar] = props;
  const [input,setInput] = useState('')


  const handleSubmit = e => {
    e.preventDefault();
    const userInfo = {
      name: input,
      status: input,
      species: input,
      type: input,
      gender: input
    }
    setChar([...char, userInfo])
  }


  return (
    <section className="search-form">
     <form onSubmit = {(e) => handleSubmit(e)}>
       <input type = "text" onChange={(e) => setInput(e.target.value)} name = "name" placeholder = "Name" />
       <input type = "text" onChange={(e) => setInput(e.target.value)} name = "status" placeholder = "Status" />
       <input type = "text" onChange={(e) => setInput(e.target.value)} name = "species" placeholder = "Species" />
       <input type = "text" onChange={(e) => setInput(e.target.value)} name = "type" placeholder = "Type" />
       <input type = "text" onChange={(e) => setInput(e.target.value)} name = "gender" placeholder = "Gender" />
      <button type = "submit">Submit</button>
     </form>
    </section>
  );
}

import React from "react";

export default function SearchForm() {

  return (
    <section className="search-form">
     <form>
       <input type = "text" name = "name" placeholder = "Name" />
       <input type = "text" name = "status" placeholder = "Status" />
       <input type = "text" name = "species" placeholder = "Species" />
       <input type = "text" name = "type" placeholder = "Type" />
       <input type = "text" name = "gender" placeholder = "Gender" />

     </form>
    </section>
  );
}

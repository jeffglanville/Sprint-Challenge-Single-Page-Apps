import React from "react";
import {Link} from 'react-router-dom';
import CharacterList from '../components/CharacterList';

export default function CharacterCard(props) {
  const {results} = props
  useEffect(() => {}, []);

  return (
  <div>
    {results && (
      <Link to = {`/CharacterList/${results.id}`}/>
    )}
  </div>
  );
}

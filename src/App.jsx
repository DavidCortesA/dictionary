import { useState, useEffect } from 'react';
import dictionary from './data/data';
import DefinitionDisplay from './components/DefinitionDisplay';

function App() {
  const [name, setName] = useState();
  const [definition, setDefinition] = useState();

  
  const handleInput = e => {
    setName(e.target.value);
  }
  
  const handleSubmit = async () => {
    const data = await dictionary(name);
    setDefinition(data);
  }
  
  return (
    <div className="container-md" style={{marginTop: '6rem', marginBottom: '3rem'}}>
      <div className="input-group mb-3">
        <input 
          type="text"
          className="form-control"
          placeholder="Search for a word"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleInput} 
        />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmit}>Search</button>
      </div>
      {definition === undefined ? (<h4 className="text-center mt-3 fst-italic fw-bold">Look for a word</h4>) : (<DefinitionDisplay definition={definition} />)}
    </div>
  )
}

export default App;
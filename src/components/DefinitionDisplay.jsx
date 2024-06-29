import React from "react";

const DefinitionDisplay = ({definition}) => {

  const handlePlay = audio => {
    if(!audio) return;
    const audioElement = new Audio(audio);
    audioElement.play();
  }

  if (!definition) return (<h4 className="text-center mt-3 fst-italic fw-bold">Word not found</h4>);

  const hasAudio = definition[0]?.phonetics[0]?.audio;

  console.log(definition);

  return (
    <div className="container-md px-md-5 row justify-content-between align-items-center">
      <div className="col-9">
        <h1 className="text-start">{definition[0].word}</h1>
        <p className="text-start text-danger">{definition[0].phonetic}</p>
      </div>
      <div className="col-3 text-end">
        <button
          type="button"
          style={{fontSize: '5rem'}}
          className={hasAudio ? 'btn btn-lg text-danger' : 'btn btn-lg text-secondary'}
          onClick={() => handlePlay(definition[0].phonetics[0].audio)}>
          <i className="bi bi-play-circle-fill"></i>
        </button>
      </div>
      <h6 className="text-start">{definition[0].meanings[0].partOfSpeech}</h6>
      <h5 className="text-start text-secondary mt-4">Meaning</h5>
      <ul className="ps-5">
        {definition[0].meanings[0].definitions.map((definition, index) => (
          <li key={index}>
            <p className="text-start">{definition.definition}</p>
          </li>
        ))}
      </ul>
      {definition[0].meanings[0].synonyms === 'synonyms' &&      
        <>
          <h5 className="text-start text-secondary">Synonyms</h5>
          <div className="text-start text-danger">
            {definition[0].meanings[0].synonyms.map((synonym, index) => (
              <span key={index} className="text-break">{synonym}{index < definition[0].meanings[0].synonyms.length - 1 ? ', ' : ''}</span>
            ))}
          </div>
        </>
      }
      {definition[0].meanings[1].partOfSpeech === 'verb' && 
      <>
      <h6 className="text-start mt-4">Verb</h6>
        <ul className="px-5">
        {definition[0].meanings[1].definitions.map((definition, index) => (
          <li key={index}>
            <p className="text-start">{definition.definition}</p>
            <p className="text-start text-secondary">{definition.example}</p>
            </li>
          ))}
        </ul>
      </>
      }
      <hr />
      <span className="text-start text-secondary">Source: <a href="{definition[0].sourceUrl}" className="text-secondary" target="_blank" rel="noreferrer noopener">{definition[0].sourceUrls[0]} <i className="bi bi-share" /></a></span>
      
    </div>
  )
}

export default DefinitionDisplay
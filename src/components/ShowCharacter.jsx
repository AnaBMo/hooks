import './ShowCharacter.css';
import { useState } from "react";
import UseFetchCharacter from '../hooks/UseFetchCharacter';

function ShowCharacter() {

    const [apiUrl, setApiUrl] = useState("");
    const { character, loading, error } = UseFetchCharacter({ url: apiUrl });
  
    return (
      <>
        <h1>Hook & Fetch</h1>
        <h3>Presiona el botón para obtener un personaje</h3>
  
        <div className="showCharactersContainer">
          <button className= 'pokemonBtn' onClick={() => setApiUrl("https://pokeapi.co/api/v2/pokemon/5")}>
            Pokémon
          </button>
          <button className= 'rickBtn' onClick={() => setApiUrl("https://rickandmortyapi.com/api/character/3")}>
            Rick & Morty
          </button>
        </div>
  
        {loading && <p>Cargando...</p>}
        {error && <p>Error: {error}</p>}
  
        {character && (
          <div className="characterContainer">
            <h2>{character.name}</h2>
            <img src={character.sprites?.front_default || character.image} alt={character.name} />
          </div>
        )}
      </>
    );
  }
  
export default ShowCharacter;
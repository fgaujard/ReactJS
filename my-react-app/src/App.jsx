import PokemonCard from './components/PokemonCard.jsx'
import { useState } from "react"; 

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];



function App() {
  const [pokemonIndex, SetPokemonIndex] = useState(0);
  
  const prevPoke = () => {
    if (pokemonIndex > 0)
      SetPokemonIndex(pokemonIndex - 1)
  }

  const nextPoke = () => {
    if (pokemonIndex < (pokemonList.length -1))
      SetPokemonIndex(pokemonIndex + 1)
  }

  return (
    <div id="frame">
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <br/>
      {pokemonIndex > 0 ? <button onClick={prevPoke}>Previous</button> : ""}
      {pokemonIndex < (pokemonList.length - 1) ? <button onClick={nextPoke}>Next</button> : ""}
    </div>
  )
}

export default App

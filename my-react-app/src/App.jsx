import PokemonCard from './components/PokemonCard.jsx'
import NavBar from './components/NavBar.jsx'
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
  
  return (
    <div id="frame">
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      <br/>
      <NavBar
        SetPokemonIndex={SetPokemonIndex}
        pokemonList={pokemonList}
      />
    </div>
  )
}

export default App

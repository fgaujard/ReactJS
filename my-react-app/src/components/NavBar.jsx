function NavBar({ pokemonIndex, SetPokemonIndex, pokemonLength }) {
  
    const prevPoke = () => {
      if (pokemonIndex > 0)
        SetPokemonIndex(pokemonIndex - 1)
    }
  
    const nextPoke = () => {
      if (pokemonIndex < (pokemonLength))
        SetPokemonIndex(pokemonIndex + 1)
    }
    return (
        <>
          {pokemonIndex > 0 ? <button onClick={prevPoke}>Previous</button> : ""}
          {pokemonIndex < (pokemonLength) ? <button onClick={nextPoke}>Next</button> : ""}
        </>
    )
}

export default NavBar;
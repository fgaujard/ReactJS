function NavBar({ SetPokemonIndex, pokemonList }) {

  const pokeClick = (index) => {
		SetPokemonIndex(index);
	}

  return (
    <>
      {pokemonList.map((pokemon, index) => (
				<button key={index} onClick={() => pokeClick(index)}>{pokemon.name}</button>
			))}
    </>
  )
}

export default NavBar;
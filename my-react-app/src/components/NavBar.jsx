function NavBar({ SetPokemonIndex, pokemonList }) {

  const pokeClick = (index) => {
		SetPokemonIndex(index);
    if (pokemonList[index].name === "pikachu")
      alert("pika pikachu !!!");
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
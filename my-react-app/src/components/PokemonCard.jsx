import styles from "./Pokemon.css";
import PropTypes from "prop-types";

PokemonCard.propTypes = {
  pokemon : PropTypes.shape({
    name : PropTypes.string.isRequired,
    imgSrc: PropTypes.string
  }).isRequired
}

function PokemonCard({pokemon}) {
  return (
    <>
      <figure>
        {pokemon.imgSrc === undefined ? <p>???</p> : <img src={pokemon.imgSrc} alt={pokemon.name}/>}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </>
  )
}

export default PokemonCard

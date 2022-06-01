import React from "react";
import pokemons from "../../data/inf";
import Pokemon from "../Pokemon";
import './styles.css'

class PokeDex extends React.Component {
  render() {
    return (
      <section className="container">
        { pokemons.map((pokemon) => <Pokemon inf={pokemon}/>) }
      </section>
    )
  }
}

export default PokeDex
import React from "react";
import './styles.css'
class Pokemon extends React.Component {
  render() {
    const {type, name, image} = this.props.inf
    return (
      <section className="poke-card">
        <section className="poke-inf">
          <p>{name}</p>
          <p>{type}</p>
          <p> {this.props.inf.averageWeight.value} {this.props.inf.averageWeight.measurementUnit}</p>
        </section>
        <img className="poke-img" src={image} alt={name} />
      </section>
    )
  }
}

export default Pokemon
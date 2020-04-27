import React, { Component, PureComponent } from "react";
import ReactDOM from "react-dom";
import { TextField } from '@material-ui/core';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      inputPokemon:"",
      pokemons: []
    };

    this.handleInputPokemon = this.handleInputPokemon.bind(this);
  }

  handleInputPokemon(event) {
    const { inputPokemon } = event.target;
    this.setState(() => {
      return {
        inputPokemon
      };
    });
  }



  render() {
    return (
      <div>
        <h1>Pokedex!</h1>
        <TextField
          id="newpokemon"
          onChange={handleInputPokemon}
        >
          
        </TextField>
        {this.state.pokemons.map((element, index) => {
          return <div>
              <p>Pokemon</p>
          </div>
        })}
      </div>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
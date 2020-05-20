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
    console.log("render")
    return (
      <div>
        <div>HELLO</div>
        <div>Worlds</div>
      </div>
    );
  }
}
console.log("HELLOOOOO")
export default Form;

const wrapper = document.getElementById("container");
console.log(wrapper)
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
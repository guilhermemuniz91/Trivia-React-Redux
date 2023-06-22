import React, { Component } from 'react';

export default class Login extends Component {
  state = {
    name: '',
    gravatarEmail: '',
    // isDisabledButton: true,
  };

  validaInput = () => {
    const { gravatarEmail, name } = this.state;
    // if (gravatarEmail.length !== 0 && name.length !== 0) {
    //   return false;
    // }
    return name && gravatarEmail;
  };

  inputChange = (event) => {
    const { target: { name, value } } = event;
    this.setState(
      {
        [name]: value,
      },
      // this.validaInput,
    );
  };

  render() {
    const { name, gravatarEmail } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="">
            Seu nome
            <input
              name="name"
              placeholder="nome"
              type="text"
              data-testid="input-player-name"
              value={ name }
              onChange={ this.inputChange }
            />
          </label>
          <label htmlFor="">
            Seu email
            <input
              name="gravatarEmail"
              placeholder="email"
              type="email"
              data-testid="input-gravatar-email"
              value={ gravatarEmail }
              onChange={ this.inputChange }
            />
          </label>
          <button
            data-testid="btn-play"
            // onClick={ this.validaInput }
            disabled={ !this.validaInput() }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fetchToken } from '../services/API';

class Login extends Component {
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

  handleClick = async (event) => {
    event.preventDefault();
    const { history } = this.props;
    const token = await fetchToken();
    localStorage.setItem('token', token);
    history.push('/gamePage');
  };

  render() {
    const { name, gravatarEmail } = this.state;
    return (
      <div>
        <form action="">
          <label htmlFor="name">
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
          <label htmlFor="gravatarEmail">
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
            onClick={ this.handleClick }
            disabled={ !this.validaInput() }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,

};

export default Login;

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setName, setEmail } from '../redux/actions/login';
import { fetchToken } from '../services/API';

class Login extends Component {
  state = {
    name: '',
    gravatarEmail: '',
    // isDisabledButton: true,
  };

  validaInput = () => {
    const { gravatarEmail, name } = this.state;
    const { dispatch } = this.props;
    // if (gravatarEmail.length !== 0 && name.length !== 0) {
    //   return false;
    // }
    dispatch(setEmail(gravatarEmail));
    dispatch(setName(name));
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

  cfgBtn = () => {
    const { history } = this.props;
    history.push('/Settings');
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
          <button
            data-testid="btn-settings"
            type="button"
            onClick={ this.cfgBtn }
          >
            Settings
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
    history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};


function mapStateToProps(state) {
  return {
    name: state.name,
  };
}

export default connect(mapStateToProps)(Login);

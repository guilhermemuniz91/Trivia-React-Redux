import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userInfo } from '../redux/actions';
import { fetchToken } from '../services/API';
import { resetScore } from '../redux/actions/login';

class Login extends Component {
  state = {
    name: '',
    gravatarEmail: '',
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(resetScore());
  }

  validaInput = () => {
    const { gravatarEmail, name } = this.state;
    return name && gravatarEmail;
  };

  inputChange = (event) => {
    const { target: { name, value } } = event;
    this.setState(
      {
        [name]: value,
      },
    );
  };

  handleClick = async (event) => {
    event.preventDefault();
    const { history, dispatch } = this.props;
    dispatch(userInfo(this.state));
    const token = await fetchToken();
    localStorage.setItem('token', token);
    history.push('/game');
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

export default connect()(Login);

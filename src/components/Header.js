import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    imgGravatar: '',
  };

  gravatar = async () => {
    const { email } = this.props;
    const request = await fetch(`https://www.gravatar.com/avatar/${email}`);
    const data = request.json();
  };

  render() {
    const { name } = this.props;
    return (
      <thead>
        <p data-testid="header-score" />
        <img data-testid="header-profile-picture" src="" />
        <p data-testid="header-player-name">{name}</p>
      </thead>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    name: state.player.name,
    email: state.player.gravatarEmail,
    // score: state.player.score,
  };
}

export default connect(mapStateToProps)(Header);

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { name } = this.props;
    return (
      <thead>
        <p data-testid="header-score" />
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
    // score: state.player.score,
  };
}

export default connect(mapStateToProps)(Header);

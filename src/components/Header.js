// import { MD5 } from 'crypto-js';
// import md5 from 'md5';
import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  state = {
    imgGravatar: '',
  };

  componentDidMount() {
    this.gravatar();
  }

  gravatar = () => {
    const { player } = this.props;
    const hashEmail = md5(player.gravatarEmail).toString();
    // const request = await fetch(`https://www.gravatar.com/avatar/${hashEmail}`);
    // const data = request.json();
    const request = `https://www.gravatar.com/avatar/${hashEmail}`;
    console.log(hashEmail);
    this.setState({
      imgGravatar: request,
    });
  };

  render() {
    const { player } = this.props;
    const { imgGravatar } = this.state;
    return (
      <header>
        <p data-testid="header-score">0</p>
        <img
          data-testid="header-profile-picture"
          src={ imgGravatar }
          alt={ imgGravatar }
        />
        <p data-testid="header-player-name">{player.name}</p>
      </header>
    );
  }
}

Header.propTypes = {
  player: PropTypes.shape({
    name: PropTypes.string.isRequired,
    gravatarEmail: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    player: state.player,
    // score: state.player.score,
  };
}

export default connect(mapStateToProps)(Header);

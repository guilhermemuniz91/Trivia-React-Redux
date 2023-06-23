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

  gravatar = async () => {
    const { email } = this.props;
    const hashEmail = md5(email).toString();
    const request = await fetch(`https://www.gravatar.com/avatar/${hashEmail}`);
    // const data = request.json();
    console.log(hashEmail);
    this.setState({
      imgGravatar: request,
    });
  };

  render() {
    const { name } = this.props;
    const { imgGravatar } = this.state;
    return (
      <thead>
        <p data-testid="header-score" />
        <img
          data-testid="header-profile-picture"
          src={ imgGravatar }
          alt={ imgGravatr }
        />
        <p data-testid="header-player-name">{name}</p>
      </thead>
    );
  }
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
  return {
    name: state.player.name,
    email: state.player.gravatarEmail,
    // score: state.player.score,
  };
}

export default connect(mapStateToProps)(Header);

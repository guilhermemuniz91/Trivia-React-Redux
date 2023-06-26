import md5 from 'crypto-js/md5';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setImgGravatar } from '../redux/actions/login';

class Header extends Component {
  state = {
    imgGravatar: '',
  };

  componentDidMount() {
    this.gravatar();
  }

  gravatar = () => {
    const { player, dispatch } = this.props;
    const hashEmail = md5(player.gravatarEmail).toString();
    // const request = await fetch(`https://www.gravatar.com/avatar/${hashEmail}`);
    // const data = request.json();
    const responseGravatar = `https://www.gravatar.com/avatar/${hashEmail}`;
    // console.log(responseGravatar);
    // const request = `https://www.gravatar.com/avatar/${hashEmail}`;
    // console.log(hashEmail);
    this.setState({
      imgGravatar: responseGravatar,
    });
    dispatch(setImgGravatar(responseGravatar));
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
  dispatch: PropTypes.func.isRequired,
  gravatarImg: PropTypes.shape({
    gravatarImg: PropTypes.string,
  }).isRequired,
  player: PropTypes.shape({
    gravatarEmail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  console.log(state.Img);
  return {
    player: state.player,
    // score: state.player.score,
    Img: state.player.gravatarImg,
  };
}

export default connect(mapStateToProps)(Header);

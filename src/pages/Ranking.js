import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ranking extends Component {
  // pegar do estado global name, score e gravatremail
  voltarBtn = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    const { player } = this.props;
    console.log(player.name);
    return (
      <div>
        <li>
          {/* <img src={player.imgGravatar} alt="imgGravatar"></img> */}
          {/* <p data-testid="player-name-${index}">{player.name}</p> */}
          {/* <p data-testid="player-score-${index}">{player.score}</p> */}

        </li>
        <button
          data-testid="btn-go-home"
          type="button"
          onClick={ this.voltarBtn }
        >
          Página inicial
        </button>
      </div>
    );
  }
}

Ranking.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  player: PropTypes.shape({
    imgGravatar: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.string,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    player: state.player,
  };
}

export default connect(mapStateToProps)(Ranking);

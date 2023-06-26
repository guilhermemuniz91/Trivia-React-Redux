import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ranking extends Component {
  // mentoria: não estou conseguindo pegar o gravatarImg do estado global
  // pegar do estado global name, score e gravatremail
  // fazer um array de ranking
  // mockar as informações de usuario dentro de um array
  voltarBtn = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    // const { player, score, gravatarImg } = this.props;
    console.log(gravatarImg);
    return (
      <div>
        <li>
          <img src={ gravatarImg } alt="gravatarImg" />
          {/* <p data-testid="player-name-${index}">{player.name}</p> */}
          {/* <p data-testid="player-score-${index}">{score}</p> */}

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
    score: state.player.score,
    gravatarImg: state.player.gravatarImg,
    ranking: state.player.ranking,
  };
}

export default connect(mapStateToProps)(Ranking);

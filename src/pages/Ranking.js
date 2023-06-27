import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Ranking extends Component {
  state = {
    rankingSort: [],
  };

  componentDidMount() {
    const ranking = JSON.parse(localStorage.getItem('ranking')) || [];
    const ordenado = ranking.sort((a, b) => b.score - a.score);
    this.setState({
      rankingSort: ordenado,
    });
  }

  voltarBtn = () => {
    const { history } = this.props;
    history.push('/');
  };

  render() {
    // const { player, score, gravatarImg } = this.props;
    const { rankingSort } = this.state;
    // console.log(gravatarImg);
    return (
      <div>
        { rankingSort.map((ranking, index) => (
          <div key={ index }>
            <img src={ ranking.gravatarImg } alt="gravatarImg" />
            <p data-testid={ `player-name-${index}` }>{ranking.name}</p>
            <p data-testid={ `player-score-${index}` }>{ranking.score}</p>
          </div>

        ))}
        <h1 data-testid="ranking-title">Ranking</h1>

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
    gravatarImg: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number,
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

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { shuffleArray } from '../services/SortArrayQuestions';
// import { connect } from 'react-redux';
class Question extends Component {
  countDown = 0;

  timeOut = 0;

  constructor() {
    super();
    this.state = {
      countdown: 30,
      areAnswersDisabled: false,
      isNextDisabled: true,
      btnAnswerClick: false,
    };
  }

  async componentDidMount() {
    this.countDown = this.createInterval();
    this.timeOut = this.createTimeout();
  }

  handleClasses = (correct) => {
    const { btnAnswerClick } = this.state;

    if (btnAnswerClick && correct) {
      return 'answer-correct';
    }

    if (btnAnswerClick && !correct) {
      return 'answer-wrong';
    }
  };

  handleSelectAnswer = () => {
    clearInterval(this.countDown);
    this.setState({
      isNextDisabled: false,
      areAnswersDisabled: true,
      btnAnswerClick: true,
    });
  };

  handleNextQuestion = () => {
    const { updateIndex } = this.props;

    clearInterval(this.countDown);
    clearTimeout(this.timeOut);
    updateIndex();
    this.setState({
      areAnswersDisabled: false,
      isNextDisabled: true,
      btnAnswerClick: false,
      // countdown: 30,
    });
    this.countDown = this.createInterval();
    this.timeOut = this.createTimeout();
  };

  createInterval = () => {
    const millisToSecond = 30000;
    return setInterval(() => {
      const { countdown } = this.state;
      if (countdown === 1) clearInterval(this.countDown);

      this.setState((prevState) => ({ countdown: prevState.countdown - 1 }));
    }, millisToSecond);
  };

  createTimeout = () => {
    const millisToThirtySeconds = 30000;
    return setTimeout(() => {
      console.log('CreateTimeout');
      this.setState({
        areAnswersDisabled: true,
        isNextDisabled: false,

      });
    }, millisToThirtySeconds);
  };

  render() {
    const { question } = this.props;
    const { areAnswersDisabled, isNextDisabled } = this.state;
    const correctAnswer = {
      answer: question.correct_answer,
      correct: true,
    };
    const incorrectAnswer = {
      answer: question.incorrect_answers,
      incorrect: true,
    };
    const arrayAnswers = shuffleArray([...question.incorrect_answers.map((answer) => {
      const newAnswer = {
        answer,
        correct: false,
      };
      return newAnswer;
    }), correctAnswer]);
    return (
      <div>
        <span
          data-testid="question-category"
        >
          {question.category}
        </span>
        <span
          data-testid="question-text"
        >
          {question.question}
        </span>
        <div data-testid="answer-options">
          {arrayAnswers.map(({ answer, correct }, index) => (
            <button
              key={ index }
              type="button"
              disabled={ areAnswersDisabled }
              onClick={ () => this.handleSelectAnswer() }
              className={ this.handleClasses(correct) }
              data-testid={ correct ? 'correct-answer'
                : `wrong-answer-${incorrectAnswer.indexOf}` }
            >

              {answer}
            </button>
          ))}
        </div>
        {
          !isNextDisabled && (
            <button
              type="button"
              data-testid="btn-next"
              onClick={ this.handleNextQuestion }
            >
              Next
            </button>
          )
        }
      </div>
    );
  }
}
Question.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  // history: PropTypes.func.isRequired,
  updateIndex: PropTypes.func.isRequired,
  question: PropTypes.shape({
    category: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
    question: PropTypes.string,
  }).isRequired,
};
// const mapStateToProps = (state) => ({
//   question: state.gameReducer.questions,
//   // currentIndex: state.gameReducer.currentIndex,
// });
export default Question;

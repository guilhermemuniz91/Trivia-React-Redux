import React from 'react';
import Header from '../components/Header';
import Question from '../components/Question';
import { updateQuestions } from '../services/updateQuestions';

class Game extends React.Component {
  state = {
    questions: [],
    actualIndex: 0,
  };

  updateQuestions = updateQuestions.bind(this);

  componentDidMount() {
    this.updateQuestions();
  }

  updateIndex = () => {
    const { actualIndex } = this.state;
    const maxLength = 5;

    if (actualIndex < maxLength) {
      this.setState({
        actualIndex: actualIndex + 1,
      });
    }
  };

  render() {
    const { questions, actualIndex } = this.state;
    // console.log(questions[actualIndex]);
    return (
      <>
        <Header />
        <main>
          {questions.length > 0 && (
            <Question
              question={ questions[actualIndex] }
              updateIndex={ this.updateIndex }
            />
          )}
        </main>
      </>
    );
  }
}
export default Game;

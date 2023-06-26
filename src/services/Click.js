import { actionPlay } from '../redux/actions/actionPlay';

export async function onClickPlayButton() {
  try {
    const URL = 'https://opentdb.com/api_token.php?command=request';
    const request = await fetch(URL);
    const { token } = await request.json();
    localStorage.setItem('token', token);
    const { nameInput, emailInput } = this.state;
    const { dispatch, history } = this.props;
    dispatch(actionPlay(nameInput, emailInput));
    history.push('/game');
  } catch (error) {
    console.log(error);
  }
}

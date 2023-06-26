export async function updateQuestions() {
  const token = localStorage.getItem('token');
  const respondeCode = 0;
  if (!token) {
    const { history } = this.props;
    history.push('/');
  } else {
    const endPoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const result = await fetch(endPoint);
    const data = await result.json();
    if (data.response_code !== respondeCode) {
      const { history } = this.props;
      history.push('/');
    } else {
      this.setState({
        questions: [...data.results],
      });
    }
  }
}

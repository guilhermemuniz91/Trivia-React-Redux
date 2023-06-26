export function redirectToLogin(component) {
  const { history } = component.props;
  localStorage.removeItem('token');
  history.push('/');
}

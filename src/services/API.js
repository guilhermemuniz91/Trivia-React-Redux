export const fetchToken = async () => {
  const URL_TOKEN = 'https://opentdb.com/api_token.php?command=request';
  const resolve = await fetch(URL_TOKEN);
  const data = await resolve.json();
  return data.token;
};

const API_TOKEN = "beec08af73f4b8ae411ad8148d339a5a"

export function getFilmsFromApiWithSearchText(text) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

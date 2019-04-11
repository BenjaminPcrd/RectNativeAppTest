const API_TOKEN = "beec08af73f4b8ae411ad8148d339a5a"

export function getFilmsFromApiWithSearchText(text, page) {
  const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=en&query=' + text + '&page=' + page
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log(error))
}

export function getImageFromApi(name) {
  return 'https://image.tmdb.org/t/p/w300' + name
  //return 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/' + name
}

export function getFilmDetailFromApi (id) {
  return fetch('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_TOKEN + '&language=fr')
    .then((response) => response.json())
    .catch((error) => console.error(error));
}

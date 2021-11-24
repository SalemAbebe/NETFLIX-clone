const API_KEY = "01c52602ae8817d2ea09b9bb353339c8";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
    fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
};
export default requests;

// http://files.tmdb.org/p/exports/movie_ids_04_28_2017.json.gz

// https://api.themoviedb.org/3/movie/76341?api_key=01c52602ae8817d2ea09b9bb353339c8
// https://api.themoviedb.org/3/configuration/timezones?api_key=01c52602ae8817d2ea09b9bb353339c8


// https://api.themoviedb.org/3/discover/movie?api_key=01c52602ae8817d2ea09b9bb353339c8&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate

// https://api.themoviedb.org/3/genre/movie/list?api_key=01c52602ae8817d2ea09b9bb353339c8&language=en-US

// https://api.themoviedb.org/3/discover/movie?api_key=01c52602ae8817d2ea09b9bb353339c8&sort_by=popularity.desc

// https://api.themoviedb.org/3/trending/person/day?api_key=01c52602ae8817d2ea09b9bb353339c8
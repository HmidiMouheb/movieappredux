const addMovieAction = (src, movieTitle, movieYear, description, rating) => ({
  type: "ADD_MOVIE",
  src: src,
  movieTitle: movieTitle,
  movieYear: movieYear,
  description: description,
  rating: rating,
  key: Math.floor(Math.random() * 100)
});

export default addMovieAction;

let initialState = {
  movies: [
    {
      src:
        "https://i.pinimg.com/564x/c1/6e/c8/c16ec817cd5b1a6ff9b3034e2b10ab16.jpg",
      movieTitle: "American PIE 4",
      movieYear: 2019,
      description:
        "American Pie is a comedy about four high school senior boys who make a pact to lose their virginity before the end of the school year. This alone makes it almost touchingly old-fashioned; I did not know Hollywood still permitted high school seniors to be virgins",
      rating: 5,
      key: Math.floor(Math.random() * 100),
      movieTrailer: "https://www.youtube.com/embed/viM1hFrVtRs",
      isOpen: false
    },
    {
      src:
        "https://i.pinimg.com/564x/ed/7e/90/ed7e90d9f86461a2f27775f791e26433.jpg",
      movieTitle: "Fury",
      movieYear: 2014,
      description:
        "Fury is a fictional film about a tank crew during the final days of the war in Europe. Ayer was influenced by the service of veterans in his family and by reading books such as Belton Y. Cooper's Death Traps, about American armored warfare in World War II.",
      rating: 4,
      key: Math.floor(Math.random() * 100),
      movieTrailer: "https://www.youtube.com/embed/09w9MTtZDEM",
      isOpen: false
    },
    {
      src:
        "https://i.pinimg.com/564x/81/8a/9e/818a9eb6c19a9c1d9273261c16199dd4.jpg",
      movieTitle: "NOW YOU SEE ME 2",
      movieYear: 2013,
      description:
        "Director Louis Letterier's heist-thriller Now You See Me is quickly becoming one of my most anticipated films of 2013. ... The story centers on a group of magicians who pull off bank heists during their death-defying acts, and the FBI squad tasked with catching them.",
      rating: 3,
      key: Math.floor(Math.random() * 100),
      movieTrailer: "https://www.youtube.com/embed/4I8rVcSQbic",
      isOpen: false
    }
  ]
};

const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      return (
        {
          movies: [
            ...state.movies,
            {
              src: action.src,
              movieTitle: action.movieTitle,
              movieYear: action.movieYear,
              description: action.description,
              rating: action.rating,
              key: action.key,
              isOpen: false
            }
          ]
        },
        (initialState = {
          movies: [
            ...state.movies,
            {
              src: action.src,
              movieTitle: action.movieTitle,
              movieYear: action.movieYear,
              description: action.description,
              rating: action.rating,
              key: action.key,
              isOpen: false
            }
          ]
        })
      );

    case "SEARCH_MOVIE":
      return action.payload.length
        ? {
            movies: state.movies.filter(el =>
              el.movieTitle.toLowerCase().includes(action.payload)
            ).length
              ? state.movies.filter(el =>
                  el.movieTitle.toLowerCase().includes(action.payload)
                )
              : [...initialState.movies]
          }
        : initialState;
    case "SEARCH_BY_RATING":
      return action.payload
        ? {
            movies: initialState.movies.filter(
              el => el.rating == action.payload + 1
            ).length
              ? initialState.movies.filter(
                  el => el.rating == action.payload + 1
                )
              : [...initialState.movies]
          }
        : initialState;
    case "EDIT_CARD":
      return (
        {
          movies: state.movies.map(el =>
            el.key === action.payload.keyValue
              ? {
                  movieTitle: action.payload.newTitle
                    ? action.payload.newTitle
                    : el.movieTitle,
                  src: action.payload.newSrc ? action.payload.newSrc : el.src,
                  movieYear: action.payload.newYear
                    ? action.payload.newYear
                    : el.movieYear,
                  description: action.payload.newDescription
                    ? action.payload.newDescription
                    : el.description,
                  rating: action.payload.newRating
                    ? action.payload.newRating
                    : el.rating,
                  key: el.key
                }
              : el
          )
        },
        (initialState = {
          movies: state.movies.map(el =>
            el.key === action.payload.keyValue
              ? {
                  movieTitle: action.payload.newTitle
                    ? action.payload.newTitle
                    : el.movieTitle,
                  src: action.payload.newSrc ? action.payload.newSrc : el.src,
                  movieYear: action.payload.newYear
                    ? action.payload.newYear
                    : el.movieYear,
                  description: action.payload.newDescription
                    ? action.payload.newDescription
                    : el.description,
                  rating: action.payload.newRating
                    ? action.payload.newRating
                    : el.rating,
                  key: el.key
                }
              : el
          )
        })
      );
    case "REMOVE_MOVIE":
      let newState = {
        movies: state.movies.filter(el => el.key != action.payload)
      };

      return newState, (initialState = newState);
    case "IS_OPEN":
      return {
        movies: state.movies.map(el =>
          el.key === action.payload
            ? { ...el, isOpen: !el.isOpen }
            : { ...el, isOpen: el.isOpen }
        )
      };

    default:
      return state;
  }
};
export default addMovieReducer;

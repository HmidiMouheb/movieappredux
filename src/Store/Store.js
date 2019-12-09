import { combineReducers, createStore } from "redux";
import addMovieReducer from "../reducers/addMovieReducer";
import movieStarsFillReducer from "../reducers/movieStarsFillReducer";
import modalReducer from "../reducers/modalReducer";

let allReducers = combineReducers({
  addMovie: addMovieReducer,
  fillStars: movieStarsFillReducer,
  modal: modalReducer
});
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;

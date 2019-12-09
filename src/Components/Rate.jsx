import React from "react";
import { connect } from "react-redux";
import fillStarsAction from "../actions/fillStarsAction";
import resetStarsAction from "../actions/resetStarsAction";
import searchMovieByRatingAction from "../actions/searchMovieByRatingAction";

const Rate = props => {
  let stars = [];
  let FillnFilterHandler = i => {
    props.fillStarsAction(i);
    props.searchByRate(i);
  };
  for (let i = 0; i < 5; i++) {
    if (i < (props.rate ? props.rate : props.fillStars.rate)) {
      stars.push(
        <span
          onClick={() => (props.isClickable ? FillnFilterHandler(i) : null)}
          key={i}
        >
          ★
        </span>
      );
    } else {
      stars.push(
        <span
          onClick={() => (props.isClickable ? FillnFilterHandler(i) : null)}
          key={i}
        >
          ✩
        </span>
      );
    }
  }

  return <div onMouseLeave={() => props.resetStars()}>{stars}</div>;
};

const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  fillStarsAction: fillStarsAction,
  resetStars: resetStarsAction,
  searchByRate: searchMovieByRatingAction
};

export default connect(mapStateToProps, mapActionsToProps)(Rate);

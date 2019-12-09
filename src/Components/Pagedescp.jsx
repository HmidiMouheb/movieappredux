import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Pagedescp(props) {
  let filteredById = props.addMovie.movies.filter(
    el => el.movieTitle == props.match.params.id
  );
  return (
    <div>
      <h1>{filteredById[0].movieTitle}</h1>
      <p>{filteredById[0].description}</p>
      <iframe
        title="trailer"
        width="956"
        height="538"
        src={filteredById[0].movieTrailer}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>{" "}
      <Link to="/">Home</Link>
    </div>
  );
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, null)(Pagedescp);

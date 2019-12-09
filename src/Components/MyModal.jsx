import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import addMovieAction from "../actions/addMovieAction";
import searchMovieAction from "../actions/searchMovieAction";
import Rate from './Rate'

class MyModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
      movieSource: "",
      movieTitle: "",
      movieYear: "",
      description: "",
      rating: 0,
      searchedName: ""
    };
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => this.setState({ show: true });

  addMovieHandler = e => {
      e.preventDefault()
    this.props.addMovie(
      this.state.movieSource,
      this.state.movieTitle,
      this.state.movieYear,
      this.state.description,
      this.state.rating
    );
  };

  searchMovieHandler = e => {
    this.props.searchMovie(e.target.value);
  };
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px",
          backgroundColor: "#e4cb58"
        }}
      >
        <Button variant="primary" onClick={this.handleShow}>
          Addmovie
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>ADD MOVIE!</Modal.Title>
          </Modal.Header>
          <form action="" onSubmit={e => this.addMovieHandler(e)}>
            <Modal.Body>
              <input
                type="text"
                onChange={e => this.setState({ movieSource: e.target.value })}
              />
              {"Enter movie source!"}
              <input
                type="text"
                onChange={e => this.setState({ movieTitle: e.target.value })}
              />
              {"Enter movie title!"}

              <input
                type="text"
                onChange={e => this.setState({ movieYear: e.target.value })}
              />
              {"Enter movie year!"}

              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                onChange={e => this.setState({ description: e.target.value })}
              ></textarea>
              {" Enter movie description!"}
              <input
                type="text"
                onChange={e => this.setState({ rating: e.target.value })}
              />
              {"Rate your movie!"}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <button type='submit' variant="primary" onClick={this.handleClose}>
                Save Changes
              </button>
            </Modal.Footer>
          </form>
        </Modal>
        <form action="" onSubmit={e => e.preventDefault()}>
          <input type="text" onChange={e => this.searchMovieHandler(e)} />
        </form>
        <Rate isClickable={true}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  addMovie: addMovieAction,
  searchMovie: searchMovieAction
};
export default connect(mapStateToProps, mapActionsToProps)(MyModal);

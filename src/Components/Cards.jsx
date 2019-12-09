import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import addMovieAction from "../actions/addMovieAction";
import "./Cards.css";
import Rate from "./Rate";
import { Modal, Form } from "react-bootstrap";
import removeMovieAction from "../actions/removeMovieAction";
import modalOpenCloseAction from "../actions/modalOpenCloseAction";
import { Link, Route } from "react-router-dom";
import Pagedescp from "./Pagedescp";
import EditModal from "./EditModal";
import MyModal from './MyModal'

class Cards extends Component {
  render() {
    return (
      <Container style={{ marginTop: "50px", position: "relative" }}>
        <Row>
        <MyModal style={{ margin: "20px" }} />

        </Row>
        <Row>
          {this.props.addMovie.movies.map((el, i) => {
            return (
              <Col key={i}>
                <Card style={{ width: "15rem" }}>
                  <Card.Img
                    style={{ width: "15rem", height: "20rem" }}
                    variant="top"
                    src={el.src}
                  />
                  <Card.Body>
                    <Card.Title>{el.movieTitle}</Card.Title>
                    <Card.Text>{el.movieYear}</Card.Text>
                    <Rate rate={el.rating} />
                    <Button variant="primary">
                      <Link to={`/details/${el.movieTitle}`}>Description</Link>
                    </Button>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                        margin: "10px"
                      }}
                    >
                      <Button
                        variant="primary"
                        onClick={() => this.props.openCloseModal(el.key)}
                      >
                        Edit
                      </Button>
                      <EditModal isOpen={el.isOpen} keyValue={el.key} />
                      <Button
                        variant="danger"
                        onClick={() => this.props.remove(el.key)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return state;
};

const mapActionsToProps = {
  addmovie: addMovieAction,
  remove: removeMovieAction,
  openCloseModal: modalOpenCloseAction
};

export default connect(mapStateToProps, mapActionsToProps)(Cards);

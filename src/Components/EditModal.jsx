import React, { Component } from "react";
import modalOpenCloseAction from "../actions/modalOpenCloseAction";
import editCardAction from "../actions/editCardAction";
import {connect} from 'react-redux'
import './EditModal.css'

class EditModal extends Component {
  state = {
    newSrc: "",
    newTitle: "",
    newYear: "",
    newDescription: "",
    newRating: 0
  };
  newValuesHandler = keyValue => {
    return this.props.edit(
      keyValue,
      this.state.newSrc,
      this.state.newTitle,
      this.state.newYear,
      this.state.newDescription,
      this.state.newRating
    );
  };
  render() {
    return this.props.isOpen ? (
      <div className="modal-container">
        <form action="" className="form-container" onSubmit={e => e.preventDefault()}>
          <input
            type="text"
            onChange={e => this.setState({ newSrc: e.target.value })}
          />
          {"Movie source"}
          <input
            type="text"
            onChange={e => this.setState({ newTitle: e.target.value })}
          />
          {"Movie Title"}
          <input
            type="text"
            onChange={e => this.setState({ newYear: e.target.value })}
          />
          {"Movie Year"}
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            onChange={e =>
              this.setState({
                newDescription: e.target.value
              })
            }
          ></textarea>
          {"movie Description"}
          <input
            type="text"
            onChange={e => this.setState({ newRating: e.target.value })}
          />
          {"Movie Rating"}
          <button onClick={()=>this.props.openCloseModal(this.props.keyValue)}>Close</button>
          <button onClick={() => this.newValuesHandler(this.props.keyValue)}>
            Save
          </button>
        </form>
      </div>
    ) : null;
  }
}

const mapStateToProps = state => {
  return state;
};
const mapActionsToProps = {
  openCloseModal: modalOpenCloseAction,
  edit: editCardAction
};

export default connect(mapStateToProps, mapActionsToProps)(EditModal);

import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Typography from "material-ui/Typography";
import Modal from "material-ui/Modal";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "material-ui/Dialog";
import "./InputModal.css";

import { addItem } from "../../store/actions";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: "absolute",
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
  }
});

class InputModal extends React.Component {
  state = {
    open: false,
    text: "",
    description: "",
    assigned: "",
    owner: "",
    links: ""
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  inputChangeHandler = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  onSubmitHandler = event => {
    event.preventDefault();
    const newItem = this.state;
    this.props.addItem({ ...newItem, stage: "notStarted" });
    this.setState({
      text: "",
      description: "",
      assigned: "",
      owner: "",
      links: ""
    });
    this.handleClose();
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Button onClick={this.handleOpen} className="button">
          +
        </Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <DialogContent>
              <DialogContentText>Oh Boy, More to do!</DialogContentText>
              <div onSubmit={this.onSubmitHandler}>
                <div>
                  <TextField
                    autofocus
                    placeholder="title"
                    name="text"
                    onChange={this.inputChangeHandler}
                    value={this.state.text}
                  />
                </div>
                <div>
                  <TextField
                    rows="5"
                    cols="50"
                    placeholder="Description"
                    name="description"
                    onChange={this.inputChangeHandler}
                    value={this.state.description}
                  />
                </div>
                <div>
                  <TextField
                    placeholder="Assigned to:"
                    name="assigned"
                    onChange={this.inputChangeHandler}
                    value={this.state.assigned}
                  />
                </div>
                <div>
                  <TextField
                    placeholder="Feature Owner: "
                    name="owner"
                    onChange={this.inputChangeHandler}
                    value={this.state.owner}
                  />
                </div>
                <div>
                  <TextField
                    placeholder="supporting links"
                    name="links"
                    onChange={this.inputChangeHandler}
                    value={this.state.links}
                  />
                </div>
                <Button onClick={this.onSubmitHandler}>Add</Button>
              </div>
            </DialogContent>
          </div>
        </Modal>
      </div>
    );
  }
}

InputModal.propTypes = {
  classes: PropTypes.object.isRequired
};

// We need an intermediary variable for handling the recursive nesting.
const InputModalWrapped = withStyles(styles)(InputModal);

export default connect(null, { addItem })(InputModalWrapped);

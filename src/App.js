import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Note from "./components/Note";
import axios from "axios";

class App extends Component {
  state = {
    firstname: "",
    lastname: "",
    phonenumber: "",
    role: "",
    message: "",
    showPopup: false,
    data: [],
  };
  componentDidMount() {
    axios
      .get("http://localhost:3001/note")
      .then((res) => this.setState({ data: res.data }));
  }
  inputHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };
  render() {
    const props = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      phonenumber: this.state.phonenumber,
      role: this.state.role,
      message: this.state.message,
    };
    return (
      <div>
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View {...props} />
        </div>
        {this.state.showPopup && <Popup {...props} />}
        {this.state.data.map((note) => (
          <Note {...note} />
        ))}
      </div>
    );
  }
}
export default App;

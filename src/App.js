import React, { Component } from "react";
import Form from "./components/Form";
import View from "./components/View";
import Popup from "./components/Popup";
import Note from "./components/Note";
import axios from "axios";
import "./index.css";

class App extends Component {
  state = {
    inputData: {
      firstname: "",
      lastname: "",
      phone: "",
      role: "",
      message: "",
    },
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
      inputData: {
        ...this.state.inputData,
        [event.target.name]: event.target.value,
      },
    });
  };

  popupHandler = (event) => {
    event.preventDefault();
    this.setState({ showPopup: true });
  };

  postHandler = (event) => {
    axios
      .post("http://localhost:3001/note", this.state.inputData)
      .then((response) => {
        console.log(response);
        this.setState({ showPopup: false });
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="form_area">
          <Form change={this.inputHandler} submit={this.popupHandler} />
          <View {...this.state.inputData} />
        </div>

        {this.state.showPopup && (
          <Popup {...this.state.inputData} postHandler={this.postHandler} />
        )}

        <div className="wrapper">
          <h2>Data</h2>

          {this.state.data.map((note) => (
            <Note key={note.id} {...note} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;

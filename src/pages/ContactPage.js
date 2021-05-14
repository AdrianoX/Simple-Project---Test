import React from "react";
import "../styles/ContactPage.css";
import { Prompt } from "react-router-dom";

class ContactPage extends React.Component {
  state = {
    value: "",
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    return (
      <div className="contact">
        Contact
        <form onSubmit={this.handleSubmit}>
          <h3>Write to us...</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            placeholder="Your message here"
          ></textarea>
          <button>Send</button>
        </form>
        <Prompt
          when={this.state.value}
          message={"Your form is empty ! Are you sure you want to move on ?"}
        />
      </div>
    );
  }
}

export default ContactPage;

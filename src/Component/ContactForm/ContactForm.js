import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./ContactForm.module.scss";
import contactsOperation from "../../redux/contacts/contactsOperations";

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    // Перевірка на ввід числа
    if (!Number(this.state.number)) {
      alert("В полі Number було введено не число, повторіть спробу");

      this.setState({
        number: "",
      });
      return;
    }

    this.props.onAddContact(this.state.name, this.state.number);

    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className={styles.contactForm} onSubmit={this.handleSubmit}>
        <label>
          Name
          <br />
          <input
            className={styles.input}
            type="text"
            value={name}
            name="name"
            onChange={this.handleChange}
            required
          />
        </label>
        <br />
        <label>
          Number
          <br />
          <input
            className={styles.input}
            type="tel"
            value={number}
            name="number"
            onChange={this.handleChange}
          />
        </label>
        <br />
        <button className={styles.addBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  onAddContact: contactsOperation.addContact,
};

export default connect(null, mapDispatchToProps)(ContactForm);

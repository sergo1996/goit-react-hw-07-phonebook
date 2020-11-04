import React from "react";
import "./App.css";
import Title from "./Component/Title/Phonebook";
import ContactForm from "./Component/ContactForm/ContactForm";
import ContactList from "./Component/ContactList/ContactList";
import Filter from "./Component/Filter/Filter";
import { connect } from "react-redux";
import contactsOperations from "./redux/contacts/contactsOperations";

class App extends React.Component {
  componentDidMount() {
    this.props.onFetchContacts();
  }
  render() {
    return (
      <div>
        {this.props.isLoadingContacts && <h1> LOADING...</h1>}
        <Title />
        <ContactForm />
        <ContactList />
        {(this.props.value.length > 1 || this.props.filter) && <Filter />}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.contacts.items,
  filter: state.contacts.filter,
  isLoadingContacts: state.contacts.loading,
});
const mapDispatchToProps = {
  onFetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from "react";
import ContactListItem from "../ContactListItem/ContactListItem";
import PropTypes from "prop-types";
import contactsSelectors from "../../redux/contacts/contactsSelectors";
import styles from "./ContactList.module.scss";

import { connect } from "react-redux";

const ContactList = ({ contacts }) => (
  <section>
    {contacts.map((contact) => (
      <ContactListItem
        className={styles.list}
        key={contact.id}
        id={contact.id}
      />
    ))}
  </section>
);

const mapStateToProps = (state) => {
  return { contacts: contactsSelectors.getVisibleContacts(state) };
};

export default connect(mapStateToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
};

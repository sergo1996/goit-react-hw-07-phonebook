import React from "react";
import PropTypes from "prop-types";
import styles from "./Filter.module.scss";
import contactsSelectors from "../../redux/contacts/contactsSelectors";

import { connect } from "react-redux";
import contactsActions from "../../redux/contacts/contactsActions";

let Filter = ({ filter, onChangeFilter }) => {
  return (
    <section className={styles.section}>
      <label className={styles.label}>
        Find contacts by name:
        <br />
        <input
          onChange={(e) => onChangeFilter(e.target.value)}
          value={filter}
          name="filter"
          type="text"
          className={styles.input}
        />
      </label>
    </section>
  );
};

const mapStateToProps = (state) => ({
  value: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = {
  onChangeFilter: contactsActions.changeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string,
};

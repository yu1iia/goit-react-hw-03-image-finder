import React, { Component } from "react";
import styles from "./Searchbar.module.css";
import { toast } from "react-toastify";
import propTypes from "prop-types";

export default class Searchbar extends Component {
  state = {
    request: "",
  };

  static propTypes = {
    onSubmit: propTypes.func.isRequired,
  };

  handleRequestChange = (event) => {
    this.setState({ request: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    if (this.state.request.trim() === "") {
      toast.error("Please enter your request");
      return;
    }
    
    this.props.onSubmit(this.state.request);
    this.setState({ request: "" });
  };

  render() {
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={this.handleSubmit}>
        
            <button type="submit" className={styles.SearchFormButton}>
              <span className={styles.SearchFormButtonLabel}>Search</span>
            </button>
          
          <input
            className={styles.SearchFormInput}
            name="request"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.request}
            onChange={this.handleRequestChange}
          />
        </form>
      </header>
    );
  }
}

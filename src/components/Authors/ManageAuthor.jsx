import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import toastr from 'toastr';

import * as actions from '../../actions/authors';
import AuthorForm from './AuthorForm';

class ManageAuthor extends Component {
  state = {
    errors: {},
    author: this.props.author || { // eslint-disable-line
      id: '',
      firstName: '',
      lastName: '',
    },
    saving: false,
  }

  static getDerivedStateFromProps(props, state) {
    if (props.author && props.author.id !== state.author.id) {
      return { author: props.author };
    }
    return null;
  }

  updateAuthorState = (event) => {
    const { author } = this.state;
    const { name, value } = event.target;
    this.setState(prevState => ({
      errors: { ...prevState.errors, [name]: null },
      author: {
        ...author, [name]: value.trim(),
      },
    }));
  }

  authorFormIsValid = () => {
    let formIsValid = true;
    const errors = {};
    const { author: { firstName, lastName } } = this.state;
    if (firstName.length < 3) {
      errors.firstName = 'Please enter a valid input';
      formIsValid = false;
    }
    if (lastName.length < 3) {
      errors.lastName = 'Please enter a valid input';
      formIsValid = false;
    }
    this.setState({ errors });
    return formIsValid;
  }

  saveAuthor = (event) => {
    event.preventDefault();

    if (!this.authorFormIsValid()) return;

    this.setState({ saving: true });
    const { saveAuthor, history } = this.props;
    const { author } = this.state;
    saveAuthor(author).then(() => {
      toastr.success('Author saved');
      this.setState({ saving: false });
      history.push('/authors');
    });
  }

  render() {
    const { errors, author, saving } = this.state;
    return (
      <AuthorForm
        errors={errors}
        author={author}
        onChange={this.updateAuthorState}
        onSave={this.saveAuthor}
        saving={saving}
      />
    );
  }
}

ManageAuthor.propTypes = {
  saveAuthor: PropTypes.func.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(
  (state, ownProps) => ({
    author: state.authors.find(author => author.id === ownProps.match.params.id),
  }),
  dispatch => bindActionCreators(actions, dispatch),
)(ManageAuthor);

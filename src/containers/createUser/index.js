import React, { Component } from 'react';

import './createUser.scss';
import FormUser from '../../presentation/components/form'

export class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      photoURL: '',
      about: ''
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.createUser = this.createUser.bind(this);
  }

  changeHandler(event) {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  createUser() {
    fetch('http://localhost:3000/users', {
      method: 'POST',
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(this.props.history.replace('/users/'))
  }

  submitForm(event) {
    console.log("state", this.state);
    event.preventDefault();
    this.createUser();
  }

  render() {
    return (
      <FormUser submitForm={(event) => { this.submitForm(event) }} changeHandler={(event) => { this.changeHandler(event) }} />
    );
  }
}

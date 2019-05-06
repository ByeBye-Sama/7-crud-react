import React, { Component } from "react";

import FormUser from '../../presentation/components/form'

export class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      country: '',
      photoURL: '',
      about: '',
      id: ''
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  saveUser() {
    fetch(`http://localhost:3000/users/${this.props.match.params.id}`, {
      method: 'PUT',
      body: JSON.stringify(this.state),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => {
        this.props.history.push(`/users/`)
      })
  }

  getUser() {
    fetch(`http://localhost:3000/users/${this.props.match.params.id}`)
      .then(data => data.json())
      .then(data => {
        this.setState(() => (Object.assign({}, data)));
      })
  }

  changeHandler(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  submitForm(event) {
    event.preventDefault();
    this.saveUser();
  }

  render() {
    return (
      <FormUser submitForm={(event) => { this.submitForm(event) }} changeHandler={(event) => { this.changeHandler(event) }} {...this.state} />
    );
  }
}

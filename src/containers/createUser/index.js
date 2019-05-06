import React, { Component } from "react";

import './createUser.scss';

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
  }

  changeHandler(event) {

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  submitForm(event) {
    console.log("state", this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field-label is-normal">
              <label className="label">Name</label>
            </div>
            <div className="field">
              <input required className="input" type="text" placeholder="First Name" name="firstName" onChange={this.changeHandler} />
            </div>
            <div className="field-label is-normal">
              <label className="label">Last Name</label>
            </div>
            <div className="field">
              <input required className="input" type="text" placeholder="Last Name" name="lastName" onChange={this.changeHandler} />
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-body">
            <div className="field-label is-normal">
              <label className="label">Country</label>
            </div>
            <div className="field">
              <div className="select is-fullwidth">
                <select required className="country" name="country" onChange={this.changeHandler}>
                  <option disabled defaultValue="">Country</option>
                  <option value="Peru">Peru</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Brazil">Brazil</option>
                </select>
              </div>
            </div>
            <div className="field-label is-normal">
              <label className="label">Cellphone</label>
            </div>
            <div className="field">
              <input required className="input" type="text" placeholder="Cellphone" name="phone" onChange={this.changeHandler} />
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Email</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input required className="input" type="email" placeholder="example@gmail.com" name="email" onChange={this.changeHandler} />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">Photo</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <input required className="input" type="url" placeholder="URL Photo" name="photoURL" onChange={this.changeHandler} />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label is-normal">
            <label className="label">About</label>
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <textarea required className="textarea" placeholder="Say something about you" name="about" onChange={this.changeHandler} />
              </div>
            </div>
          </div>
        </div>
        <div className="field is-horizontal">
          <div className="field-label">
            {/* Left empty for spacing */}
          </div>
          <div className="field-body">
            <div className="field">
              <div className="control">
                <button className="button is-primary is-fullwidth" type="submit" value="Submit">
                  Submit
              </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

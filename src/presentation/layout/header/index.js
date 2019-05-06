import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

import './header.scss';

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="container">
          <nav className="navbar is-transparent">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
              </a>
            </div>

            <div className="navbar-menu">
              <div className="navbar-start">
                <a className="navbar-item" href="">
                  Home
              </a>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <NavLink className="button is-primary" to="/create">
                      <span>Create</span>
                    </NavLink>
                  </p>
                  <p className="control">
                    <NavLink className="button is-primary is-outlined" to="/users">
                      <span>Users</span>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

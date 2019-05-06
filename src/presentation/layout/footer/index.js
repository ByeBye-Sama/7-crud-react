import React, { Component } from 'react';

import './footer.scss';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <br></br><br></br><br></br><br></br>
          <nav className="navbar is-fixed-bottom has-background-primary">
            <div className="navbar-end">
              <div className="navbar-item">
                <p className="has-text-light">
                  React-Crud by <a className="has-text-grey-dark" href="https://jgthms.com"><u>Joaquin C</u></a> | Copyright-2019 &nbsp;
                </p>
              </div>
            </div>
          </nav>
        </div>
      </footer>
    );
  }
}

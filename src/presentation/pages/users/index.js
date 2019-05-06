import React, { Component } from 'react';

import { GetUser } from '../../../containers/getUsers'
import './users.scss';

export class PageUsers extends Component {
  render() {
    return (
      <GetUser />
    );
  }
}

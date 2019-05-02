import React, { Component } from "react";

import './create.scss';
import {CreateUser} from '../../../containers/createUser/index';

export class PageCreate extends Component {
  render() {
    return (
      <div>
        <br></br><br></br>
        <CreateUser/>
      </div>
    );
  }
}

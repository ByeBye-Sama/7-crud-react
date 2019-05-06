import React from "react";

import './create.scss';
import { CreateUser } from '../../../containers/createUser';

export function PageCreate(props) {
  console.log('get props?', props);
  return (
    <div>
      <br></br><br></br>
      <CreateUser {...props} />
    </div>
  );

}

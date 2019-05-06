import React from "react";

import { EditUser } from '../../../containers/editUser';

export function PageEdit(props) {
  console.log('get props?', props);
  return (
    <div>
      <br></br><br></br>
      <EditUser {...props} />
    </div>
  );

}

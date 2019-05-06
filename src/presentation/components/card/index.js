import React from "react";
import { Link } from "react-router-dom";

export default function CardUser(props) {
  const {
    firstName,
    lastName,
    email,
    phone,
    country,
    photoURL,
    about,
    id
  } = props;

  return (
    <React.Fragment>
      <Link to={`/users/edit/${id}`}>Edit</Link>
      <button className="button is-danger" onClick={() => { props.deleteUser(id) }}>Delete</button>
      <Link to={`/users/${id}`} className="card">
        <div className="card-image">
          <figure className="image is-4by3">
            <img style={{ width: '100%' }} src={photoURL} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <div className="media">
            <div className="media-left">
              <figure className="image is-48x48">
                <img src={photoURL} alt="Placeholder image" />
              </figure>
            </div>
            <div className="media-content">
              <p className="title is-4">{firstName} {lastName}</p>
              <p className="subtitle is-6">{email}</p>
              <p className="subtitle is-6">{phone}</p>
              <p className="subtitle is-6">{country}</p>
            </div>
          </div>
          <div className="content">
            {about}
          </div>
        </div>
      </Link>
    </React.Fragment>
  )
}

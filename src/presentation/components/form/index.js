import React from 'react';

export default function FormUser(props) {
  return (
    <form onSubmit={props.submitForm}>
      <div className="field is-horizontal">
        <div className="field-body">
          <div className="field-label is-normal">
            <label className="label">Name</label>
          </div>
          <div className="field">
            <input required className="input" type="text" placeholder="First Name" name="firstName" value={props.firstName} onChange={props.changeHandler} />
          </div>
          <div className="field-label is-normal">
            <label className="label">Last Name</label>
          </div>
          <div className="field">
            <input required className="input" type="text" placeholder="Last Name" name="lastName" value={props.lastName} onChange={props.changeHandler} />
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
              <select required className="country" name="country" value={props.country} onChange={props.changeHandler}>
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
            <input required className="input" type="text" placeholder="Cellphone" name="phone" value={props.phone} onChange={props.changeHandler} />
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
              <input required className="input" type="email" placeholder="example@gmail.com" name="email" value={props.email} onChange={props.changeHandler} />
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
              <input required className="input" type="url" placeholder="URL Photo" name="photoURL" value={props.photoURL} onChange={props.changeHandler} />
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
              <textarea required className="textarea" placeholder="Say something about you" name="about" value={props.about} onChange={props.changeHandler} />
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

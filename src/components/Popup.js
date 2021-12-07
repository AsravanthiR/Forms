import React from "react";
const closeHandler = () => {
  window.location.reload();
};
export default function Form({
  firstname,
  lastname,
  role,
  message,
  phonenumber,
}) {
  return (
    <div className="overlay">
      <div className="popup">
        <h1>Your note:</h1>
        <div>
          <p>
            First name:<span>{firstname}</span>
          </p>
          <p>
            Last name:<span>{lastname}</span>
          </p>
          <p>
            Phonenumber:<span>{phonenumber}</span>
          </p>
          <p>
            Message :<span>{message}</span>
          </p>
          <p>
            Role :<span>{role}</span>
          </p>
          <button onClick={closeHandler}>Yes I am sure</button>
          <button className="Secondary" onClick={closeHandler}>
            No, dont want to post
          </button>
        </div>
      </div>
    </div>
  );
}

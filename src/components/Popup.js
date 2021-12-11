import React from "react";

const closeHandler = () => {
  window.location.reload();
};

export default function Popup({
  firstname,
  lastname,
  role,
  message,
  phone,
  postHandler,
}) {
  return (
    <div className="overlay">
      <div className="popup">
        <h2>Your note:</h2>
        <p>
          First name:<span>{firstname}</span>
        </p>
        <p>
          Last name:<span>{lastname}</span>
        </p>
        <p>
          Phonenumber:<span>{phone}</span>
        </p>
        <p>
          Message :<span>{message}</span>
        </p>
        <p>
          Role :<span>{role}</span>
        </p>

        <button type="submit" id="reload" onClick={postHandler}>
          YES, I am sure
        </button>
        <button type="submit" id="reload2" onClick={closeHandler}>
          NOPE, don't want to post it
        </button>
      </div>
    </div>
  );
}

import React from "react";

const Note = ({ firstname, lastname, phonenumber, role, message }) => {
  return (
    <div classname="note">
      <p>
        {firstname} {lastname} - {role}| {phonenumber} |{" "}
        <strong>{message}</strong>
      </p>
    </div>
  );
};

export default Note;

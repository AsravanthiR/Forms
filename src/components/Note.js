import React from "react";

const Note = ({ firstname, lastname, phone, role, message }) => {
  return (
    <div className="note">
      <p>
        {firstname} {lastname} - {role}| {phone} |<strong>{message}</strong>
      </p>
    </div>
  );
};

export default Note;

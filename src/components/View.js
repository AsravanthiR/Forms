import React from "react";

export default function View({ firstname, lastname, role, phone, message }) {
  return (
    <div className="view">
      <div className="notepad">
        <h3>This is your input:</h3>
        <p>First name: {firstname}</p>
        <p>Last name: {lastname}</p>
        <p>Phone number: {phone}</p>
        <p>Role: {role}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
}

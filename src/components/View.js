import React from "react";

export default function View (props) {
    return (
        <div className="view">
            <div className="notepad">
        <h1>This is your input:</h1>
        <p>First name:  {props.firstname}</p>
        <p>Last name:  {props.lastname}</p>
        <p>Phone number:  {props.phonenumber}</p>
        <p>Role:  {props.role}</p>
        <p>Message:  {props.message}</p>
        </div>
        </div>
        );
    
   
};

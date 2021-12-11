import React from "react";

export default function Form({ submit, change }) {
  return (
    <form onSubmit={submit}>
      <div className="form_input">
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          placeholder="Your name.."
          required
          onChange={change}
        ></input>
      </div>

      <div className="form_input">
        <label htmlFor="lname">Last Name </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          placeholder="Your last name.."
          required
          onChange={change}
        ></input>
      </div>

      <div className="form_input">
        <label htmlFor="phone">Phone Number</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          placeholder="Your phone Number.."
          onChange={change}
        ></input>
      </div>

      <div className="form_input">
        <label htmlFor="role">Role:</label>
        <select name="role" id="role " onChange={change}>
          <option>Select</option>
          <option>Developer</option>
          <option>Designer</option>
          <option> Tester</option>
          <option>Manager</option>
        </select>
      </div>

      <div className="form_input">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          type="text"
          id="message"
          placeholder="Write your msg here.."
          onChange={change}
          rows="4"
          cols="10"
        ></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  );
}

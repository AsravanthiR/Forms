import React from "react";

export default function Form({ submit, change }) {
  return (
    <form onSubmit={submit}>
      <div>
        <label for htmlFor="fname">
          First name
        </label>
        <input
          type="text"
          name="firstname"
          id="firstname"
          required
          onChange={change}
        />
      </div>
      <div>
        <label for htmlFor="lname">
          Last name
        </label>
        <input
          type="text"
          name="lastname"
          id="lastname"
          required
          onChange={change}
        />
      </div>
      <div>
        <label for htmlFor="phonenumber">
          Phone number
        </label>
        <input
          type="phone"
          name="phonenumber"
          id="phone"
          required
          onChange={change}
        />
      </div>
      <div>
        <label for htmlFor="role">
          {" "}
          Role:
        </label>
        <select name="role" id="role " onChange={change}>
          <option>Select</option>
          <option>Developer</option>
          <option>Designer</option>
          <option> Tester</option>
          <option>Manager</option>
        </select>
      </div>
      <div>
        <label for htmlFor="message">
          {" "}
          Message
        </label>
        <textarea name="message" id="message" onChange={change}></textarea>
      </div>
      <input type="submit" value="send" />
    </form>
  );
}

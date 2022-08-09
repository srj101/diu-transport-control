import React from "react";

const Test1 = ({ handleChange, state }) => {
  return (
    <div className="form-group">
      <label htmlFor="username">Username</label>
      <input
        className="form-control"
        id="username"
        name="username"
        type="text"
        placeholder="Enter username"
        value={state.username}
        onChange={handleChange}
      />
    </div>
  );
};

export default Test1;

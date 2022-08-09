import React from "react";

const Test2 = ({ handleChange, state }) => {
  return (
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        className="form-control"
        id="email"
        name="email"
        type="email"
        placeholder="Enter email"
        value={state.email}
        onChange={handleChange}
      />
    </div>
  );
};

export default Test2;

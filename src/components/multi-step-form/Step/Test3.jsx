import React from "react";

const Test3 = ({ handleChange, state }) => {
  return (
    <div className="form-group">
      <label htmlFor="password">Password</label>
      <input
        className="form-control"
        id="password"
        name="password"
        type="password"
        placeholder="Enter password"
        value={state.password}
        onChange={handleChange}
      />
      <button className="btn btn-success btn-block">Sign up</button>
    </div>
  );
};

export default Test3;

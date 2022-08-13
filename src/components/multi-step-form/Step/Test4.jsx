import React from "react";

const Test4 = ({ handleChange, state }) => {
  return (
    <div className="form-group">
      <label htmlFor="gg">GG</label>
      <input
        className="form-control"
        id="gg"
        name="gg"
        type="text"
        placeholder="Enter gg"
        value={state.gg}
        onChange={handleChange}
      />
      <button className="btn btn-success btn-block">Sign up</button>
    </div>
  );
};

export default Test4;

import React from "react";

const Step = (props) => {
  if (props.currentStep !== props.step) {
    return null;
  }
  return props.children;
};

export default Step;

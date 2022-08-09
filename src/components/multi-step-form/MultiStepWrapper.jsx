import React from "react";

const MultiStepWrapper = ({ state, setState, children, totalSteps, title }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
  };

  const _next = () => {
    let currentStep = state.currentStep;
    currentStep = currentStep >= 2 ? totalSteps : currentStep + 1;
    setState({
      currentStep: currentStep,
    });
  };

  const _prev = () => {
    let currentStep = state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    setState({
      currentStep: currentStep,
    });
  };

  const previousButton = () => {
    let currentStep = state.currentStep;
    if (currentStep !== 1) {
      return (
        <button className="btn btn-secondary" type="button" onClick={_prev}>
          Previous
        </button>
      );
    }
    return null;
  };

  const nextButton = () => {
    let currentStep = state.currentStep;
    if (currentStep < 3) {
      return (
        <button
          className="btn btn-primary float-right"
          type="button"
          onClick={_next}
        >
          Next
        </button>
      );
    }
    return null;
  };

  return (
    <React.Fragment>
      <h1>{title}</h1>
      <p>Step {state.currentStep} </p>

      <form onSubmit={handleSubmit}>
        {/* 
          render the form steps and pass required props in
        */}
        {children}
        {previousButton()}
        {nextButton()}
      </form>
    </React.Fragment>
  );
};

export default MultiStepWrapper;

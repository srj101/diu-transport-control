import React, { useState } from "react";
import MultiStepWrapper from "../components/multi-step-form/MultiStepWrapper";
import Step from "../components/multi-step-form/Step/Step";
import Test1 from "../components/multi-step-form/Step/Test1";
import Test2 from "../components/multi-step-form/Step/Test2";
import Test3 from "../components/multi-step-form/Step/Test3";
import Test4 from "../components/multi-step-form/Step/Test4";

const RoutesManagement = () => {
  const [state, setState] = useState({
    currentStep: 1,
    email: "",
    username: "",
    password: "",
    gg: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      [name]: value,
    });
  };
  return (
    <div>
      <MultiStepWrapper
        state={state}
        setState={setState}
        totalSteps={4}
        title="Route Management"
      >
        <Step currentStep={state.currentStep} step={1}>
          <Test1 handleChange={handleChange} state={state} />
        </Step>
        <Step currentStep={state.currentStep} step={2}>
          <Test2 handleChange={handleChange} state={state} />
        </Step>
        <Step currentStep={state.currentStep} step={3}>
          <Test3 handleChange={handleChange} state={state} />
        </Step>
        <Step currentStep={state.currentStep} step={4}>
          <Test4 handleChange={handleChange} state={state} />
        </Step>
      </MultiStepWrapper>
    </div>
  );
};

export default RoutesManagement;

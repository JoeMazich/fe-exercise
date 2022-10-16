import React, { useState } from "react";
import FormInput from "../common/FormInput";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { postFormData } from "../../redux/actions";

interface UserCreationFormProps {
  className?: string;
}

function UserCreationForm({ className }: UserCreationFormProps) {
  const dispatch = useAppDispatch();

  const initFormData = {
    name: "",
    email: "",
    password: "",
    checkPassword: "",
    occupation: "",
    state: "",
  };

  // This form data state is entirely contained in this comp, so dont break it out in redux state
  // Form data is set as an object - little harder to follow but easier to pass through to redux actions
  const [formData, setFormData] = useState(initFormData);
  const setNameField = (name: string) => setFormData({ ...formData, name });
  const setEmailField = (email: string) => setFormData({ ...formData, email });
  const setPasswordField = (password: string) => setFormData({ ...formData, password });
  const setCheckPasswordField = (checkPassword: string) => setFormData({ ...formData, checkPassword });
  const setOccupationField = (occupation: string) => setFormData({ ...formData, occupation });
  const setStateField = (state: string) => setFormData({ ...formData, state });

  // Set all the fun error useStates
  const [nameFieldError, setNameFieldError] = useState("");
  const [emailFieldError, setEmailFieldError] = useState("");
  const [passwordFieldError, setPasswordFieldError] = useState("");
  const [checkPasswordFieldError, setCheckPasswordFieldError] = useState("");
  const [occupationFieldError, setOccupationFieldError] = useState("");
  const [stateFieldError, setStateFieldError] = useState("");

  const occupations = useAppSelector((state) => state.occupations);
  const states = useAppSelector((state) => state.states);

  const onSubmit = (event: any) => {
    // Stop default clear form on submit action
    event.preventDefault();

    //Add any desired validaters here
    if (validateForm() && validatePassword()) {
      dispatch(postFormData(formData));
      setFormData(initFormData);
    }
  };

  // Simple password validator
  const validatePassword = () => {
    if (formData.password !== formData.checkPassword) {
      setPasswordFieldError("Passwords do not match!");
      return false;
    } else {
      setPasswordFieldError("");
    }
    return true;
  };

  // Simple Form validation (checking that everything is filled in)
  const validateForm = () => {
    let validateFlag = true;
    if (!formData.name) {
      setNameFieldError("Please enter your name!");
      validateFlag = false;
    } else {
      setNameFieldError("");
    }
    if (!formData.email) {
      setEmailFieldError("Please enter your email!");
      validateFlag = false;
    } else {
      setEmailFieldError("");
    }
    if (!formData.occupation) {
      setOccupationFieldError("Please enter your occupation!");
      validateFlag = false;
    } else {
      setOccupationFieldError("");
    }
    if (!formData.state) {
      setStateFieldError("Please enter your state!");
      validateFlag = false;
    } else {
      setStateFieldError("");
    }
    if (!formData.password) {
      setPasswordFieldError("Please enter your password!");
      validateFlag = false;
    } else {
      setPasswordFieldError("");
    }
    if (!formData.checkPassword) {
      setCheckPasswordFieldError("Please renter your password!");
      validateFlag = false;
    } else {
      setCheckPasswordFieldError("");
    }
    return validateFlag;
  };

  return (
    <form className={`${className} user_creation_form`} onSubmit={onSubmit}>
      <FormInput label={"Name"} state={formData.name} setState={setNameField} error={nameFieldError} />
      <FormInput label={"Email"} state={formData.email} setState={setEmailField} error={emailFieldError} />
      <div>
        <FormInput
          label={"Password"}
          state={formData.password}
          setState={setPasswordField}
          type={"password"}
          error={passwordFieldError}
        />
        <FormInput
          label={"Repeat password"}
          state={formData.checkPassword}
          setState={setCheckPasswordField}
          type={"password"}
          error={checkPasswordFieldError}
        />
      </div>
      <FormInput
        label={"Occupation"}
        data={occupations}
        state={formData.occupation}
        setState={setOccupationField}
        error={occupationFieldError}
      />
      <FormInput
        label={"State"}
        data={states.map((state: StateType) => {
          return state.abbreviation;
        })}
        state={formData.state}
        setState={setStateField}
        error={stateFieldError}
      />
      <button type="submit" className={"user_creation_form-submit"}>
        Submit
      </button>
    </form>
  );
}

export default UserCreationForm;

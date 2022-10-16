import React from "react";

// general form input, pass data through to add selection options
interface FormInputProps {
  state: any;
  setState: any;

  data?: [string];
  label?: string;
  type?: string;
  className?: string;
  error?: string;
}

function FormInput({ type = "text", label, state, setState, className, data, error }: FormInputProps) {
  return (
    <label className={`${className} form_input`}>
      {label}
      <input
        type={type}
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        list={`${label}List`}
      />
      <span className="error">{error}</span>
      {data && (
        <datalist id={`${label}List`}>
          {data.map((dataPoint: any) => {
            return <option key={dataPoint}>{dataPoint}</option>;
          })}
        </datalist>
      )}
    </label>
  );
}

export default FormInput;

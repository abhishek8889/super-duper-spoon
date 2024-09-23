import React from "react";

const Input = ({ type, name, placeholder, value, onChange, onBlur, error, label }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`form-control ${error ? "is-invalid" : ""}`}
      />
      </div>
  );
}

export default Input;
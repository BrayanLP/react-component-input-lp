// import { default as InputLp } from './components/inputSimple';
// import { default as InputFieldLp } from './components/inputField';

import React from 'react';
import PropTypes from 'prop-types';
import styles from './components/inputField.css';
const InputFieldLp = ({
  // type,
  // name,
  label,
  // onChange,
  // value,
  placeholder,
  wrapperClass,
  labelClass,
  inputClass,
  errorClass,
  error,
  required,
  autoComplete,
  disabled,
  input,
}) => {
  return (
    <div
      className={
        wrapperClass ? 'form-group-lp ' + wrapperClass : 'form-group-lp'
      }
    >
      {label && <label className={labelClass}>{label}</label>}
      <input
        {...input}
        required={required ? required : false}
        className={
          inputClass ? 'form-control-lp ' + inputClass : 'form-control-lp'
        }
        placeholder={placeholder}
        autoComplete={autoComplete ? autoComplete : 'off'}
        disabled={disabled ? 'true' : false}
      />
      {required && (
        <span
          className={
            errorClass
              ? 'invalid-feedback hide ' + errorClass
              : 'invalid-feedback hide'
          }
        >
          {error ? error : 'required field'}
        </span>
      )}
    </div>
  );
};

InputFieldLp.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  // onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  // icon: PropTypes.string,
  error: PropTypes.string,
};

export default InputFieldLp;

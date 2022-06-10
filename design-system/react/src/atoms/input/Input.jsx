import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ id,placeholder, onData,type, isValid, label }) => {
  function onInput(InputEvent){
    console.log("input.onImput", InputEvent);
    if(typeof onData === 'function'){
    onData(InputEvent.target.value)
    }
  }

  const message = isValid ? "Valore buono":"Valore non buono";
  return (
    <>
      <input
      id={id}
      onInput={onInput}
      placeholder={placeholder}
      type={type}
      >
      
      </input>
      <label htmlFor={id}>{label}</label>
      {label === undefined ? null : <label htmlFor={id}>{label}</label>}
    {isValid===undefined ? null : message}
    </>
  );
};

Input.propTypes = {
  id : PropTypes.string.isRequired,
  placeholder: PropTypes.string,

  onData: PropTypes.func,

  isValid: PropTypes.bool,

  type: PropTypes.string,
  label: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onData: undefined,
  isValid: undefined,
  placeholder: undefined,
  label:undefined,

  
};

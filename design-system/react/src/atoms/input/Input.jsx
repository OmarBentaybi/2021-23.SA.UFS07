import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData,type, isValid }) => {
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
      onInput={onInput}
      placeholder={placeholder}
      type={type}
      >
      
      </input>
    {isValid===undefined ? null : message}
    </>
  );
};

Input.propTypes = {
 
  placeholder: PropTypes.string.isRequired,

  onData: PropTypes.func,

  isValid: PropTypes.bool,

  type: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  onData: undefined,
  isValid: undefined,
  
};

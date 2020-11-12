import React from 'react';
import './TextInput.css';
import PropTypes from 'prop-types';


const TextInput = ({
    name,
    type,
    label,
    value,
    onChange,
    className,
    placeholder
}) => {
    return (
        <>
        <div className="input-group">
        <label htmlFor={name}>{label}</label>
            <input  name={name}
                    type={type} 
                    placeholder={placeholder} 
                    onChange={onChange} 
                    value={value} 
                    className={className}>
            </input>  
        </div>
        </>
    );
};

TextInput.defaultProps = {
    type: "text",
    className: "text-input"
}

TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text','password','number']),
    label: PropTypes.string.isRequired,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string.isRequired
}

export default TextInput;
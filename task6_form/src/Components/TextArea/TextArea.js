import React from 'react';
import './TextArea.css';
import PropTypes from 'prop-types';

const TextArea = ({
    name,
    label,
    className,
    placeholder,
    onChange,
    rows,
    cols
}) => {
    return (
        <div className="text-area-cont">
            <label htmlFor={name}>{label}</label>
            <textarea   name={name} 
                        className={className} 
                        rows={rows}
                        cols={cols}
                        placeholder={placeholder}
                        onChange={onChange}>
            </textarea>
        </div>
    );
};

TextArea.defaultProps = {
    rows: "4",
    cols: "20",
    className: "text-area"
}

TextArea.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    rows: PropTypes.string.isRequired,
    cols: PropTypes.string.isRequired
}

export default TextArea;
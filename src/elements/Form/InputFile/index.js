import React, { useRef } from 'react';
import propTypes from 'prop-types';
import './index.scss';

const File = (props) => {
  const {
    value,
    placeholder,
    name,
    accept,
    prepend,
    append,
    outerClassName,
    inpuClassName,
  } = props;
  const refInputFile = useRef(null);

  return (
    <div className={['input-text mb-3', outerClassName].join(' ')}>
      <div className="input-group">
        {prepend && (
          <div className="input-group-prepand bg-gray-900">
            <span className="input-group-text">{prepend}</span>
          </div>
        )}
        <input
          type="file"
          accept={accept}
          ref={refInputFile}
          name={name}
          className="d-none"
          value={value}
          onChange={props.onChange}
        />
        <input
          onClick={() => refInputFile.current.click()}
          defaultValue={value}
          placeholder={placeholder}
          className={['form-control', inpuClassName].join(' ')}
        />
        {append && (
          <div className="input-group-prepand bg-gray-900">
            <span className="input-group-text">{append}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default File;
File.defaultProps = {
  placeholder: 'browse a file...',
};

File.propTypes = {
  name: propTypes.string.isRequired,
  accept: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  prepend: propTypes.oneOfType([propTypes.number, propTypes.string]),
  append: propTypes.oneOfType([propTypes.number, propTypes.string]),
  placeholder: propTypes.string,
  outerClassName: propTypes.string,
  inpuClassName: propTypes.string,
};
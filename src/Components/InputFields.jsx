import React, { useState } from "react";

// Utility function to get input class names
const getInputClassName = (showError) => {
  return `border-2 rounded-md p-2 bg-[#f6f6f6] focus:bg-white hover:border-[#F6C228] 
    focus:border-t-0 focus:border-l-0 focus:border-r-0 focus:border-b-[1px] 
    focus:border-black focus:outline-none ${
      showError ? "border-red-500" : "border-gray-300"
    }`;
};

// Utility function to get width class names
const getWidthClass = (width) => {
  return width === "full"
    ? "w-72 sm:w-80 md:w-96 lg:w-full"
    : width === "half"
    ? "w-[30rem]"
    : "w-72 sm:w-80 lg:w-60";
};

// BaseField component for shared layout and label
const BaseField = ({ label, id, required, width, children }) => (
  <div className={`flex flex-col gap-2 ${getWidthClass(width)}`}>
    <label htmlFor={id}>
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
  </div>
);

// TextField component
const TextField = ({
  label,
  id,
  type = "text",
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    onBlur && onBlur(e);
  };

  const showError = error || (required && touched && !value);

  return (
    <BaseField label={label} id={id} required={required} width={width}>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={getInputClassName(showError)}
      />
    </BaseField>
  );
};

// TextArea component
const TextArea = ({
  label,
  id,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    onBlur && onBlur(e);
  };

  const showError = error || (required && touched && !value);

  return (
    <BaseField label={label} id={id} required={required} width={width}>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={getInputClassName(showError)}
      />
    </BaseField>
  );
};

// SelectField component
const SelectField = ({
  label,
  id,
  width,
  required,
  options,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    onBlur && onBlur(e);
  };

  const showError = error || (required && touched && !value);

  return (
    <BaseField label={label} id={id} required={required} width={width}>
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={getInputClassName(showError)}
      >
        {Array.isArray(options) &&
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
    </BaseField>
  );
};

// RadioField component
const RadioField = ({
  label,
  id,
  required,
  value,
  onChange,
  onBlur,
  error,
  options,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = () => {
    setTouched(true);
    onBlur && onBlur();
  };

  const showError = error || (required && touched && !value);

  return (
    <div className="flex flex-col gap-2 self-start min-w-72 sm:min-w-80">
      <label htmlFor={id} className={showError ? "text-red-500" : ""}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="flex gap-2">
        {Array.isArray(options) &&
          options.map((option, index) => (
            <div className="flex items-center gap-2" key={index}>
              <input
                type="radio"
                id={`${id}-${option}`}
                name={id}
                value={option === "Yes"}
                checked={value === (option === "Yes")}
                onChange={onChange}
                onBlur={handleBlur}
                className="bg-[#f6f6f6]"
              />
              <label htmlFor={`${id}-${option}`}>{option}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

// TimeField component
const TimeField = ({
  label,
  id,
  width,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    onBlur && onBlur(e);
  };

  const showError = error || (required && touched && !value);

  return (
    <BaseField label={label} id={id} required={required} width={width}>
      <input
        type="time"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={getInputClassName(showError)}
      />
    </BaseField>
  );
};

// DateField component
const DateField = ({
  label,
  id,
  width,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  const [touched, setTouched] = useState(false);

  const handleBlur = (e) => {
    setTouched(true);
    onBlur && onBlur(e);
  };

  const showError = error || (required && touched && !value);

  return (
    <BaseField label={label} id={id} required={required} width={width}>
      <input
        type="date"
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        className={getInputClassName(showError)}
      />
    </BaseField>
  );
};

export { TextField, TextArea, SelectField, RadioField, TimeField, DateField };

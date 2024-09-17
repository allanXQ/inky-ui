const TextField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-72 sm:w-80 md:w-96 lg:w-full"
          : width === "half"
          ? "w-[30rem]"
          : "w-72 sm:w-80 lg:w-60"
      }`}
    >
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`border-2 rounded-md p-2 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
      />
    </div>
  );
};

const TextArea = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-72 sm:w-80 md:w-96 lg:w-full"
          : width === "half"
          ? "w-[30rem]"
          : "w-72 sm:w-80 lg:w-60"
      }`}
    >
      <label htmlFor={id}>
        {label} {!required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        id={id}
        name={id}
        placeholder={placeholder}
        className={`border-2 rounded-md p-2 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

const SelectField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  options,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-[65rem]"
          : width === "half"
          ? "w-[30rem]"
          : "w-72 sm:w-80 lg:w-60"
      }`}
    >
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        id={id}
        name={id}
        className={`border-2 rounded-md p-2 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
        value={value}
        onChange={onChange}
      >
        {Array.isArray(options) &&
          options.map((option) => (
            <option value={option} key={option}>
              {option}
            </option>
          ))}
      </select>
    </div>
  );
};

const RadioField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
  options,
}) => {
  return (
    <div className="flex flex-col gap-2 self-start min-w-72 sm:min-w-80">
      <label htmlFor={id}>
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
                className="bg-[#f6f6f6]"
              />
              <label htmlFor={`${id}-${option}`}>{option}</label>
            </div>
          ))}
      </div>
    </div>
  );
};

const TimeField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-72 sm:w-80 md:w-96 lg:w-full"
          : width === "half"
          ? "w-[30rem]"
          : ""
      }`}
    >
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`border-2 rounded-md p-2 w-72 sm:w-80 lg:w-60 h-11 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
      />
    </div>
  );
};

const DateField = ({
  label,
  id,
  type,
  width,
  placeholder,
  required,
  value,
  onChange,
  onBlur,
  error,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 ${
        width === "full"
          ? "w-72 sm:w-80 md:w-96 lg:w-full"
          : width === "half"
          ? "w-[30rem]"
          : ""
      }`}
    >
      <label htmlFor={id}>
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`border-2 rounded-md w-72 sm:w-80 lg:w-60 h-11 bg-[#f6f6f6] hover:border-[#F6C228] focus:border-[#F6C228] ${
          error ? "border-red-500" : "border-gray-300"
        } outline-none`}
      />
    </div>
  );
};

export { TextField, TextArea, SelectField, RadioField, TimeField, DateField };

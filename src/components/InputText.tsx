// components/InputText.tsx
import React from "react";

interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  value: string;
  error?: string;
  touched?: boolean;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
}

const InputText: React.FC<InputTextProps> = ({
  placeholder,
  label,
  name,
  type = "text",
  value,
  error,
  touched,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <div>
      <label className="block typography-p-regular-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full p-4 rounded-lg border typography-p-regular text-text-200 ${touched && error ? "border-red-500" : "border-gray-300"
          }`}
        placeholder={placeholder}
        {...rest}
      />
      {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputText;

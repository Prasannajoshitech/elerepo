// components/InputTextarea.tsx
import React from "react";

interface InputTextareaProps
  extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  value: string;
  placeholder: string;
  error?: string;
  touched?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
}

const InputTextarea: React.FC<InputTextareaProps> = ({
  placeholder,
  label,
  name,
  value,
  error,
  touched,
  onChange,
  onBlur,
  ...rest
}) => {
  return (
    <div>
      <label
        className="block typography-p-regular-medium text-text-400"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        name={name}
        id={name}
        rows={4}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        className={`w-full mt-3.5 p-5 rounded-lg typography-p-regular text-text-200 border resize-none ${touched && error ? "border-red-500" : "border-gray-300"
          }`}
        {...rest}
      />
      {touched && error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputTextarea;

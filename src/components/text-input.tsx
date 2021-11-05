import * as React from "react";

type TextInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextInput: React.FC<TextInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <input
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className="border px-2 h-10 lg:h-12 mb-4 border-gray-200 rounded shadow-sm w-full text-xs lg:text-sm outline-none bg-transparent placeholder-gray-400"
    />
  );
};

export default TextInput;

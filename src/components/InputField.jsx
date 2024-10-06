import React from "react";

export const InputField = ({ label, type, onChange, placeholder, name }) => {
  return (
    <div className=" flex flex-col gap-2">
      <label className=" font-medium text-lg">{label}</label>
      <input
        required
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        className="p-3 rounded-lg w-72 shadow-md border-none focus:outline-none"
      />
    </div>
  );
};

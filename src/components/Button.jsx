import React from "react";

export const Button = ({ title, onClick, type }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className=" bg-gray-500 hover:bg-slate-700 text-white p-3 rounded-lg shadow-md w-72"
    >
      {title}
    </button>
  );
};

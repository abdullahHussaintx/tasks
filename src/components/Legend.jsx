import React from "react";

export const Legend = ({ title, detail }) => {
  return (
    <fieldset className=" text-start p-3 border-2 border-black  h-20 w-72">
      <legend className=" text-2xl font-bold text-start">{title}</legend>
      <p className=" font-semibold">{detail}</p>
    </fieldset>
  );
};

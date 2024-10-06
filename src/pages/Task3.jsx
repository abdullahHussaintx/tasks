import React from "react";

export const Task3 = () => {
  return (
    <div className=" flex items-start justify-center h-screen flex-col gap-5">
      <p className="text-xl">
        I did not read the Task 3 earlier so I just made the component. Never
        mind, please ignore this since task 3 is a CLI script. I have attached a
        ZIP file. Thank you.
      </p>
      <a
        className=" p-3 hover:bg-blue-900 w-72 flex items-center justify-center text-white text-xl rounded-lg shadow-lg bg-blue-600"
        href="../assets/redditTask.zip"
        download
      >
        Download Reddit Task ZIP
      </a>
    </div>
  );
};

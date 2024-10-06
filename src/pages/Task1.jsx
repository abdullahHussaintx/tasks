import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Legend } from "../components/Legend";
import { InputField } from "../components/InputField";
import { Button } from "../components/Button";
import { postFormData } from "../redux/task1Slice";
import { TableComponent } from "../components/TableComponent";

export const Task1 = () => {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.task1Slice);
  console.log(data);
  const [formData, setFormData] = useState({
    deviceUserName: "",
    webUserName: "",
  });

  // Handle form submission
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postFormData(formData));
    setFormData({
      deviceUserName: "",
      webUserName: "",
    });
  };

  // Handle inpust change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section className=" flex flex-col items-center justify-center gap-8">
      <div>
        <Legend title="Task 1" detail="User Form Submission" />
        <form className="space-y-5" onSubmit={onSubmit}>
          <InputField
            type="text"
            label="Device User Name"
            placeholder="Enter Device User Name"
            name="deviceUserName"
            value={formData.deviceUserName}
            onChange={handleInputChange}
          />
          <InputField
            type="text"
            label="Web User Name"
            placeholder="Enter Web User Name"
            name="webUserName"
            value={formData.webUserName}
            onChange={handleInputChange}
          />
          <Button title="Display Time Sheet" type="submit" />
        </form>
      </div>
      <div>
        <p className=" text-slate-500 text-sm">
          Note: use Device User Name : Saheel987@outlook.com
        </p>
        <p className=" text-slate-500 text-sm">
          Note: use Web User Name : demo
        </p>
      </div>
      <div className="  overflow-y-auto  h-96">
        {loading ? (
          <p className=" text-2xl">Loading...</p>
        ) : (
          <TableComponent data={data[0]} />
        )}
      </div>
      {error && <p className="text-red-500">{error.message}</p>}
    </section>
  );
};

import { useEffect } from "react";
import PersonMap from "../components/MapComponent";
import { useDispatch, useSelector } from "react-redux";
import { getEmployees } from "../redux/task2Slice";

export const Task2 = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.task2Slice);

  console.log(data);
  //Im ony able to map a single user on the map  need more time to fix the issue i guess im not able to map the array i
  //i was able to get the data from api with all the objects there is some issue with the map component while mapping
  //so i only mapped one single user using index 0 from array

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);

  if (loading) return <p className="text-2xl">Loading...</p>;
  if (error) return <p className="text-xl text-red-500">{error}</p>;

  return (
    <div className=" flex flex-col gap-5 w-full">
      <p className=" text-2xl font-semibold">User Info</p>
      <p className=" font-semibold text-lg">
        Name: {data[0]?.firstName} {data[0]?.lastName}
      </p>
      <p className=" font-semibold text-lg">
        Employee ID: {data[0]?.employeeID}
      </p>

      <p className=" font-semibold text-lg">Email: {data[0]?.email}</p>
      <p className=" font-semibold text-lg">City: {data[0]?.city}</p>
      <p className=" font-semibold text-lg">Country: {data[0]?.country}</p>
      <p className=" font-semibold text-lg">
        Phone Number: {data[0]?.phoneNumber}
      </p>

      {data.length > 0 ? (
        <PersonMap persons={data} />
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

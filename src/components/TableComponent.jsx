export const TableComponent = ({ data }) => {
  return (
    <div className="overflow-x-auto ">
      <table className="min-w-full divide-y  divide-gray-200">
        <thead className="bg-gray-100  text-nowrap">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              User Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Full Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time In
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Time Out
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Hours Worked
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Book Off Image
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Book On Image
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data?.map((item) => (
            <tr key={item.timeSheetID}>
              <td className="px-6 py-4 whitespace-nowrap">{item.userName}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.deviceUserfullName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{item.timeIn}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.timeOut}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.hoursWorked}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {item.bookOnLocationName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={item.bookOffImageURL}
                  alt="Book Off"
                  className="w-20 h-20 object-cover"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={item.bookOnImageURL}
                  alt="Book On"
                  className="w-20 h-20 object-cover"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

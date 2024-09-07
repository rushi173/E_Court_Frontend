import React from "react";

const Table = () => {
  const data = [
    { name: "John Doe", email: "john@example.com", status: "Active", role: "Admin" },
    { name: "Jane Smith", email: "jane@example.com", status: "Inactive", role: "User" },
    // Add more data
  ];

  return (
    <div className="overflow-x-auto mt-6">
      <table className="min-w-full bg-white">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/4 px-4 py-2">Name</th>
            <th className="w-1/4 px-4 py-2">Email</th>
            <th className="w-1/4 px-4 py-2">Status</th>
            <th className="w-1/4 px-4 py-2">Role</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.email}</td>
              <td className="border px-4 py-2">{row.status}</td>
              <td className="border px-4 py-2">{row.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

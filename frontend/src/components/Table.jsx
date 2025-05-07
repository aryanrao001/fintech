import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";

const data = [
  { user: "Abram Schleifer", position: "Admin", office: "Edinburgh", age: 57, startDate: "25 Apr, 2027", salary: "$89,500" },
  { user: "Carla George", position: "Sub Admin", office: "London", age: 45, startDate: "11 May, 2027", salary: "$15,500" },
  { user: "Ekstrom Botthman", position: "Super Distributor", office: "San Francisco", age: 53, startDate: "15 Nov, 2027", salary: "$19,200" },
  { user: "Emery Culhane", position: "Distributor", office: "New York", age: 45, startDate: "29 Jun, 2027", salary: "$23,500" },
  { user: "Ekstrom Botthman", position: "Retailer", office: "San Francisco", age: 53, startDate: "15 Nov, 2027", salary: "$19,200" },
];

const rows = [...data, ...data,...data]; // Simulated 15 entries

const Table = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;

  // ✅ Combined filtering
  const filteredRows = rows.filter((item) => {
    const matchesSearch = item.user.toLowerCase().includes(search.toLowerCase());
    const matchesRole = role === "" || item.position.toLowerCase() === role.toLowerCase();
    return matchesSearch && matchesRole;
  });

  const totalPages = Math.ceil(filteredRows.length / entriesPerPage);
  const displayedRows = filteredRows.slice(
    (currentPage - 1) * entriesPerPage,
    currentPage * entriesPerPage
  );

  return (
    <div className="p-6">
      <h2 className="text-lg font-semibold mb-4">Datatable</h2>
      <div className="bg-white shadow rounded-xl p-4">
        {/* Top Controls */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2">
            <label className="text-sm">Show</label>
            <select className="border rounded p-1 text-sm">
              <option>10</option>
              <option>25</option>
              <option>50</option>
            </select>
            <label className="text-sm">entries</label>
          </div>
          <div className="flex items-center gap-4">
            <select
              name="Filter"
              id="roleFilter"
              className="text-sm p-2 border border-gray-300 rounded"
              onChange={(e) => {
                setRole(e.target.value);
                setCurrentPage(1); // Reset to page 1 on filter change
              }}
            >
              <option value="">All Roles</option>
              <option value="admin">Admin</option>
              <option value="sub admin">Sub Admin</option>
              <option value="super distributor">Super Distributor</option>
              <option value="distributor">Distributor</option>
              <option value="retailer">Retailer</option>
            </select>

            <input
              type="text"
              className="border rounded p-2 text-sm"
              placeholder="Search by name..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1); // Reset to page 1 on search
              }}
            />
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2 px-3">User</th>
              <th className="py-2 px-3">Position</th>
              <th className="py-2 px-3">Office</th>
              <th className="py-2 px-3">Age</th>
              <th className="py-2 px-3">Start Date</th>
              <th className="py-2 px-3">Salary</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedRows.length > 0 ? (
              displayedRows.map((item, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 px-3">{item.user}</td>
                  <td className="py-2 px-3">{item.position}</td>
                  <td className="py-2 px-3">{item.office}</td>
                  <td className="py-2 px-3">{item.age}</td>
                  <td className="py-2 px-3">{item.startDate}</td>
                  <td className="py-2 px-3">{item.salary}</td>
                  <td className="py-2 px-3 flex gap-2">
                    <button className="text-blue-500 hover:text-blue-700">
                      <Pencil size={16} />
                    </button>
                    <button className="text-red-500 hover:text-red-700">
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-4 text-gray-500">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <div>
            Showing {filteredRows.length === 0 ? 0 : (currentPage - 1) * entriesPerPage + 1} to{" "}
            {Math.min(currentPage * entriesPerPage, filteredRows.length)} of{" "}
            {filteredRows.length} entries
          </div>
          <div className="flex space-x-2">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
              className="border px-3 py-1 rounded disabled:opacity-50"
            >
              Previous
            </button>
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`border px-3 py-1 rounded ${
                  currentPage === i + 1 ? "bg-blue-500 text-white" : ""
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
              className="border px-3 py-1 rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;

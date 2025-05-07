import React from 'react';
import Table from '../components/Table';

// const users = [
//   {
//     name: 'Lindsey Curtis',
//     role: 'Admin',
//     department: 'Design',
//     project: 'Agency Website',
//     status: 'Active',
//     budget: '3.9K',
//   },
//   {
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Pending',
//     budget: '24.9K',
//   },
//   {
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Active',
//     budget: '12.7K',
//   },
//   {
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Pending',
//     budget: '24.9K',
//   },
//   {
//     name: 'Abram Schleifer',
//     role: 'Distributor',
//     department: 'Marketing',
//     project: 'Social Media',
//     status: 'Cancel',
//     budget: '2.8K',
//   },
//   {
//     name: 'Carla George',
//     role: 'Retailer',
//     department: 'Development',
//     project: 'Website',
//     status: 'Active',
//     budget: '4.5K',
//   },
//   {
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Active',
//     budget: '24.9K',
//   },{
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Cancel',
//     budget: '24.9K',
//   },{
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Pending',
//     budget: '24.9K',
//   },{
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Pending',
//     budget: '24.9K',
//   },{
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Pending',
//     budget: '24.9K',
//   },{
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Active',
//     budget: '24.9K',
//   },{
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Pending',
//     budget: '24.9K',
//   },{
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Pending',
//     budget: '24.9K',
//   },{
//     name: 'Kaiya George',
//     role: 'Super Admin',
//     department: 'Management',
//     project: 'Technology',
//     status: 'Pending',
//     budget: '24.9K',
//   },
//   {
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Active',
//     budget: '12.7K',
//   },
//   {
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Active',
//     budget: '12.7K',
//   },
//   {
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Active',
//     budget: '12.7K',
//   },
//   {
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Pending',
//     budget: '12.7K',
//   },
//   {
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Cancel',
//     budget: '12.7K',
//   },
//   {
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Active',
//     budget: '12.7K',
//   },{
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Cancel',
//     budget: '12.7K',
//   },
//   {
//     name: 'Zain Geidt',
//     role: 'Super Distributor',
//     department: 'Content',
//     project: 'Blog Writing',
//     status: 'Active',
//     budget: '12.7K',
//   },
// ];

// const statusStyles = {
//   Active: 'bg-green-100 text-green-600',
//   Pending: 'bg-yellow-100 text-yellow-600',
//   Cancel: 'bg-red-100 text-red-600',
// };

const AllUser = () => {
  return (
    <>
    {/* <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-800">User Overview</h1>
        <nav className="text-sm text-gray-500">
          <span>Home</span> &gt; <span className="text-gray-900">User Table</span>
        </nav>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-4">
        <h2 className="text-lg font-semibold mb-4 text-gray-700">Team Members</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 border-b border-gray-200">
                <th className="py-2 px-4 font-medium">Name</th>
                <th className="py-2 px-4 font-medium">Role</th>
                <th className="py-2 px-4 font-medium">Department</th>
                <th className="py-2 px-4 font-medium">Project</th>
                <th className="py-2 px-4 font-medium">Status</th>
                <th className="py-2 px-4 font-medium">Budget</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {users.map((user, index) => (
                <tr key={index} className="hover:bg-gray-50 border-b border-gray-100">
                  <td className="py-3 px-4">{user.name}</td>
                  <td className="py-3 px-4">{user.role}</td>
                  <td className="py-3 px-4">{user.department}</td>
                  <td className="py-3 px-4">{user.project}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyles[user.status]}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">{user.budget}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div> */}
    <Table/>
    </>
  );
};

export default AllUser;

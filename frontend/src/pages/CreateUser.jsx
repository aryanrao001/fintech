import React from 'react'
import { EyeOff, CreditCard, Phone, MapPin } from "lucide-react";

const CreateUser = () => {
  return (
    <div className="w-full max-w-full p-4 bg-white rounded-2xl shadow-md">
  <h2 className="text-lg font-semibold mb-3 text-gray-800">Create New User</h2>
  <div className="space-y-4">
    {/* Username */}
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">Username</label>
      <input
        type="text"
        placeholder="Enter username"
        className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Email */}
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
      <input
        type="email"
        placeholder="info@example.com"
        className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    {/* Phone */}
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">Phone Number</label>
      <div className="relative">
        <input
          type="tel"
          placeholder="Enter phone number"
          className="w-full text-sm border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* <Phone className="absolute left-2.5 top-2.5 text-gray-400" size={16} /> */}
      </div>
    </div>

    {/* Address */}
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">Address</label>
      <div className="relative">
        <textarea
          placeholder="Enter address"
          className="w-full text-sm border border-gray-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={2}
        />
        {/* <MapPin className="absolute left-2.5 top-2.5 text-gray-400" size={16} /> */}
      </div>
    </div>

    {/* Password */}
    <div>
      <label className="block text-xs font-medium text-gray-600 mb-1">Password</label>
      <div className="relative">
        <input
          type="password"
          placeholder="Enter your password"
          className="w-full text-sm border border-gray-300 rounded-md px-3 py-2 pr-9 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {/* <EyeOff className="absolute right-2.5 top-2.5 text-gray-400 cursor-pointer" size={16} /> */}
      </div>
    </div>
  </div>

  <button className="mt-5 w-full py-2 text-sm bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition duration-200">
    Submit
  </button>
</div>
  )
}

export default CreateUser;

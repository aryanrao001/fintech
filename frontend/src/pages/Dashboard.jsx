import React, { useContext } from 'react'
import { AppContext } from '../context/AllContext'

const Dashboard = () => {

  const {role} = useContext(AppContext);

  return (
    <div>

        <main className="p-6 overflow-y-auto">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <h1 className='text-sm' > Hello {role}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                <h2 className="font-semibold text-lg mb-2">Card Title</h2>
                <p className="text-sm text-gray-600">This is a card description or metric info.</p>
              </div>
            </div>
          </main>
    </div>
  )
}

export default Dashboard
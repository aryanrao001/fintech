import {
    ChevronDown,
    ChevronUp,
    LucideMenu,
    UserIcon,
    Calendar,
    LayoutDashboard,
    Moon,
    BellRing,
    ReceiptText,
  } from "lucide-react";
  import React, { useContext, useState } from "react";
  import { Link } from "react-router-dom"; // ✅ Corrected import
import  { AppContext } from "../context/AllContext";

  
  const Sidebar = ({children}) => {
    const [openMenus, setOpenMenus] = useState({});
    const { role } = useContext(AppContext);
  
    const toggleMenu = (name) => {
      setOpenMenus((prev) => ({
        ...prev,
        [name]: !prev[name],
      }));
    };
  
    const menuItems = [
      {
        title: "Admin",
        items: [
          { name: "Dashboard", icon: LayoutDashboard, link: "/" },
          {
            name: "User",
            icon: UserIcon,
            submenu: [
              { name: "Create User", link: "/createuser" },
              { name: "All Users", link: "/allusers" },
            ],
          },
          {
            name: "Report ",
            icon: ReceiptText,
            submenu: [
              { name: "DTH ", link: "/allusers" },
              { name: "Mobile ", link: "/allusers" },
              { name: "BEPS ", link: "/allusers" },
              { name: "Bills ", link: "/allusers" },
              { name: "AEPS ", link: "/allusers" },
              { name: "Money Transfer ", link: "/allusers" },
              { name: "Withdrawal ", link: "/allusers" },
              { name: "Settlement Report ", link: "/allusers" },
            ],
          },
        ],
      },
      
      // {
      //   title: "Sub Admin ",
      //   items: [
      //     {
      //       name: "Calendar",
      //       icon: Calendar,
      //       submenu: [
      //         { name: "Appointments", link: "/calendar/appointments" },
      //         { name: "Reminders", link: "/calendar/reminders" },
      //       ],
      //     },
      //     {
      //       name: "User Profile",
      //       icon: UserIcon,
      //       submenu: [
      //         { name: "View", link: "/profile/view" },
      //         { name: "Edit", link: "/profile/edit" },
      //       ],
      //     },
      //   ],
      // },
      

      // {
      //   title: "Retailer ",
      //   items: [
      //     {
      //       name: "Calendar",
      //       icon: Calendar,
      //       submenu: [
      //         { name: "Appointments", link: "/calendar/appointments" },
      //         { name: "Reminders", link: "/calendar/reminders" },
      //       ],
      //     },
      //     {
      //       name: "User Profile",
      //       icon: UserIcon,
      //       submenu: [
      //         { name: "View", link: "/profile/view" },
      //         { name: "Edit", link: "/profile/edit" },
      //       ],
      //     },
      //   ],
      // },


    ];
  
    return (
      <div className="flex h-screen bg-gradient-to-r from-gray-50 to-gray-100 text-gray-900 font-[Inter]">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow relative z-20">
          <div className="flex items-center justify-center h-16 font-bold text-xl tracking-wide">
            Fintech Solution 
          </div>
  
          <nav className="px-4 py-6 space-y-4 text-sm">
            {menuItems.map((section) => (
              <div key={section.title}>
                <p className="text-xs uppercase text-gray-400 mb-2">{section.title}</p>
                {section.items.map((item) =>
                  item.submenu ? (
                    <div key={item.name}>
                      <button
                        onClick={() => toggleMenu(item.name)}
                        className="group flex justify-between items-center w-full px-3 py-2 hover:bg-gray-100 transition rounded-lg"
                      >
                        <div className="flex items-center">
                          <item.icon className="w-5 h-5 mr-2 text-gray-500 group-hover:text-blue-600 transition" />
                          {item.name}
                        </div>
                        {openMenus[item.name] ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </button>
                      {openMenus[item.name] && (
                        <div className="ml-8 mt-2 space-y-1 text-sm">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.link}
                              className="block text-gray-600 hover:text-blue-600 transition"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      key={item.name}
                      to={item.link}
                      className="group flex items-center w-full px-3 py-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      <item.icon className="w-5 h-5 mr-2 text-gray-500 group-hover:text-blue-600 transition" />
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            ))}
          </nav>
        </aside>
  
        {/* Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 flex items-center justify-between px-6 bg-white/80 backdrop-blur-md shadow-sm z-10">
            <LucideMenu />
            <input
              type="text"
              placeholder="Search Here......"
              className="text-xl px-2 py-1 rounded-sm border-gray-200 border-2"
            />
            <div className="flex items-center gap-4">
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition" title="Toggle Theme">
                <Moon />
              </button>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition" title="Notifications">
                <BellRing />
              </button>
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/300"
                  alt="Avatar"
                  className="w-8 h-8 rounded-full ring-2 ring-blue-500"
                />
                <span className="font-medium text-sm">Musharof</span>
              </div>
            </div>
          </header>
  
          {/* Main Content */}
          <main className="p-6 overflow-y-auto">
            {/* <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl shadow p-4 hover:shadow-lg transition">
                <h2 className="font-semibold text-lg mb-2">Card Title</h2>
                <p className="text-sm text-gray-600">This is a card description or metric info.</p>
              </div>
            </div> */}
            
            {children} {/* Render the passed content here */}

          </main>
        </div>
      </div>
    );
  };
  
  export default Sidebar;
  
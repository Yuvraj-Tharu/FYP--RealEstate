import React from "react";
import { Link } from "react-router-dom";
import { MdSpaceDashboard } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaHouseChimney, FaBuildingUser } from "react-icons/fa6";

export default function Sidebar() {
  return (
    <>
      <div className="flex h-screen">
        <div className="bg-slate-700 w-64 flex-none">
          <div className="p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  to="/admin-dash"
                  className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded "
                >
                  <h1 className="flex gap-1">
                    <MdSpaceDashboard />
                    Dashboard
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  to="/customers"
                  className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded"
                >
                  <h1 className="flex gap-1">
                    <FaUsers />
                    Customers
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  to="/add-adminProperty"
                  className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded"
                >
                  <h1 className="flex gap-1">
                    <FaHouseChimney />
                    Property
                  </h1>
                </Link>
              </li>
              <li>
                <Link
                  to="/approve-user/Property"
                  className="block text-gray-300 hover:bg-gray-700 px-4 py-2 rounded"
                >
                  <h1 className="flex gap-1">
                    <FaBuildingUser />
                    Approve Properties
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-grow bg-gray-100">{/* Main content area */}</div>
      </div>
    </>
  );
}

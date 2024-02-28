import React from "react";

import Sidebar from "../../Components/Sidebar";

export default function ShowCurrentUser() {
  return (
    <>
      <div className="grid grid-cols-3 ">
        <div className=" mr-[586px] h-full">
          <Sidebar />
        </div>

        <div id="customers" className="mt-4  ">
          <h1 className="font-semibold text-slate-700 text-3xl mb-3 my-4 ">
            Users
          </h1>
          <table className="">
            <thead>
              <tr>
                <th className="">S.N</th>
                <th>Title</th>
                <th>Image</th>
                <th>Address</th>
                <th>Regular Price</th>
                <th>Discount %</th>
                <th>Status</th>
                <th>View Details</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ss</td>
                <td>ssdsdsdsdsd </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

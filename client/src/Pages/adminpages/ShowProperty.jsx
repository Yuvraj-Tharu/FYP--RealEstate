// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "../../assets/Style/table.css";

export default function ShowProperty() {
  //   const [data, setData] = useState();
  //   const navigate = useNavigate();

  return (
    <>
      <div className="flex">
        <div className="h-full">
          <Sidebar />
        </div>

        <div id="customers" className="p-4 grow flex flex-col text-center ">
          <h1 className="font-semibold text-slate-700 text-3xl mb-3 my-4 ">
            Approve User Property Listing
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
                <td>sds</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

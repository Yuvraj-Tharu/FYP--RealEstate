import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Sidebar";

export default function AdminPage() {
  const [userData, setUserData] = useState([]);
  const [property, setProperty] = useState([]);
  const [AdminProperty, setAdminProperty] = useState([]);
  console.log(property);

  useEffect(() => {
    showUserData();
    totalproperty();
  }, []);

  const showUserData = async () => {
    try {
      let result = await fetch("/api/allUsers");
      if (result) {
        result = await result.json();
        setUserData(result);
      }
    } catch (error) {
      console.log(error, "sth went wrong");
    }
  };

  const totalproperty = async () => {
    try {
      let result = await fetch("/api/CountListing");
      if (result) {
        result = await result.json();
        setProperty(result.data);
        setAdminProperty(result.admindata);
      }
    } catch (error) {
      console.log("sth went wrong with the server: " + error);
    }
  };
  const imageUrl =
    "data:image/png;base64,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";
  return (
    <>
      <div className="grid grid-cols-3  ">
        <div className="col-span-1 mr-[300px] h-full">
          <Sidebar />
        </div>

        <div className="col-span-2 bg-white p-8 items-center ml-[-200px]">
          <h1 className="text-3xl font-semibold mb-4 text-slate-600">
            Dashboard Details
          </h1>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold ">Total Property listing</h1>

              <div className="bg-slate-600 p-4 rounded-lg shadow-xl shadow-slate-600">
                <h1 className="text-white">
                  {property.length + AdminProperty.length}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold ">Total Sale Listing</h1>

              <div className="bg-slate-600 p-4 rounded-lg shadow-xl shadow-slate-600">
                <h1 className="text-white">
                  {property.filter((data) => data.type === "sale").length +
                    AdminProperty.filter((data) => data.type === "sale").length}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold ">Total Rent Listing </h1>

              <div className="bg-slate-600 p-4 rounded-lg shadow-xl shadow-slate-600">
                <h1 className="text-white">
                  {property.filter((data) => data.type === "rent").length +
                    AdminProperty.filter((data) => data.type === "rent").length}
                </h1>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="font-semibold ">Total Land Listing</h1>

              <div className="bg-slate-600 p-4 rounded-lg shadow-xl shadow-slate-600">
                <h1 className="text-white">
                  {property.filter((data) => data.type === "land").length +
                    AdminProperty.filter((data) => data.type === "land").length}
                </h1>
              </div>
            </div>
          </div>

          <div className=" mt-20  flex flex-col gap-2">
            {/*  */}
            <h1 className="text-3xl text-slate-600 font-semibold">
              Recent Customers
            </h1>
            <div className=" bg-slate-600 rounded-lg h-96 w-full shadow-[0_7px_25px_rgba(0,0,0,0.88)]">
              {userData &&
                userData.map((data) => (
                  <div key={data._id} className="ml-5 mt-3 flex ">
                    <img
                      className="h-10 w-10 mr-9 rounded-full"
                      src={data.avatar || imageUrl}
                      alt=""
                    />
                    <h1 className="text-2xl text-white">
                      {data.firstName} <span> </span>
                      {data.lastName}
                    </h1>
                  </div>
                ))}
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "../../assets/Style/table.css";

export default function Approve() {
  const [data, setData] = useState();
  const navigate = useNavigate();

  // console.log(data);

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    let result = await fetch("/api/admin-approve");
    result = await result.json();
    setData(result.listings);
  };

  const approveListing = async (id) => {
    try {
      let result = await fetch(`/api/admin-verify/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      result = await result.json();
      if (result) {
        showData();
      }
      console.log("dsds", result);
      navigate("/approve-user/Property");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="grid grid-cols-3 ">
        <div className=" mr-[586px] h-full">
          <Sidebar />
        </div>

        <div id="customers" className="mt-4  ">
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
              {data &&
                data.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}</td>
                    <td>{data.title}</td>
                    <td>
                      <Link to={`/listing/${data._id}`}>
                        <img
                          className="h-16 w-16 object-contain rouned-lg items-center "
                          src={data.imageUrl[0]}
                          alt=""
                        />
                      </Link>
                    </td>
                    <td>{data.address}</td>
                    <td>{data.regularPrice}</td>
                    <td>{data.discountPrice}</td>
                    <td>
                      {data.isVerified === false ? "Not Verify" : "Verify"}
                    </td>
                    <td>
                      <Link to={`/listing/${data._id}`}>
                        <button className="text-green-700 hover:underline">
                          Click here
                        </button>
                      </Link>
                    </td>
                    <td className="">
                      <button className="text-red-700">Cancel</button>

                      <button
                        onClick={() => {
                          approveListing(data._id);
                        }}
                        className="text-green-700 "
                      >
                        Approved
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

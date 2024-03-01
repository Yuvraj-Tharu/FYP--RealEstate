import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../../Components/Sidebar";
import "../../assets/Style/table.css";
import { toast } from "react-toastify";

export default function Approve() {
  const [data, setData] = useState();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");

  // console.log(data);

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    try {
      let result = await fetch("/api/admin-approve");
      if (result) {
        result = await result.json();
      } else {
        setMessage("No verify  Found");
      }

      setData(result.listings);
    } catch (error) {
      console.log("sth went wrong", error);
    }
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
      // console.log("dsds", result);
      navigate("/approve-user/Property");
    } catch (error) {
      console.log(error);
    }
  };

  const notApproveListing = async (id) => {
    try {
      let result = await fetch(`/api/admin-cancel/${id}`, {
        method: "PUT",
      });

      result = await result.json();
      if (result) {
        showData();
      }
      if (result.isCanceled === true) {
        toast.info(<div>Not Approved user Listing</div>, {
          theme: "colored",
          autoClose: 1000,
        });
      }
      navigate("/approve-user/Property");
    } catch (error) {
      console.log("sth went wrong with the server", error);
    }
  };
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
          {message && <p className="text-red-700 text-sm">{error}</p>}
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
                    <td className="flex flex-col gap-3">
                      <button
                        onClick={() => {
                          notApproveListing(data._id);
                        }}
                        className="text-red-700"
                      >
                        {data.isCanceled === false ? "Cancel" : "Cancelled"}
                      </button>

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

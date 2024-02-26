import React, { useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import "../../assets/Style/table.css";

export default function Approve() {
  const [data, setData] = useState();

  console.log(data);

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    let result = await fetch(`/api/admin-approve`);
    result = await result.json();
    setData(result.listings);
  };

  return (
    <>
      <div className="grid grid-cols-3 ">
        <div className=" mr-[586px] h-full">
          <Sidebar />
        </div>

        <div id="customers" className="mt-4  col-span-2 ">
          <h1 className="font-semibold text-slate-700 text-3xl mb-3 my-4 ">
            Approve User Property Listing
          </h1>
          <table className="table-auto ">
            <thead>
              <tr className="">
                <th className="b">S.N</th>
                <th>Title</th>
                <th>Image</th>
                <th>Address</th>
                <th>Regular Price</th>
                <th>Discount %</th>
                <th>Verify</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((data, index) => (
                  <tr key={data._id}>
                    <td>{index + 1}</td>
                    <td>{data.title}</td>
                    <td>{data.imageUrl}</td>
                    <td>{data.address}</td>
                    <td>{data.regularPrice}</td>
                    <td>{data.discountPrice}</td>
                    <td>{data.isVerified === false ? "false" : "true"}</td>
                    <td className="flex flex-col  items-center">
                      <button
                        onClick={() => {
                          deleteListing(listing._id);
                        }}
                        className="text-red-700"
                      >
                        Cancel
                      </button>
                      <Link>
                        <button className="text-green-700">Approce</button>
                      </Link>
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

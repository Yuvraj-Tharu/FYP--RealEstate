import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../assets/Style/table.css";

export default function ShowListing() {
  const [userListing, setUserListing] = useState([]);
  const [listingError, setListingError] = useState(false);
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    showlisting();
  }, []);
  const showlisting = async () => {
    try {
      const api = await fetch(`/api/listing/${currentUser.result._id}`);
      let result = await api.json();
      if (!result) {
        return setListingError(true);
      }
      setUserListing(result);
      console.log("data ", result);
    } catch (error) {
      console.log("some thing went wrong", error);
      setListingError(true);
    }
  };

  const deleteListing = async () => {};
  return (
    <div className="flex flex-col gap-2 mx-6">
      <h1 className="text-center  my-7 text-3xl font-semibold">
        Your Property Listing
      </h1>

      <table id="customers" className="">
        <thead>
          <tr>
            <th>S.N</th>
            <th>Title</th>
            <th>Image</th>
            <th>Address</th>
            <th>Regular Price</th>
            <th>Discount Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {userListing &&
            userListing.length > 0 &&
            userListing.map((listing, index) => (
              <tr key={listing._id}>
                <td>{index + 1}</td>
                <td>{listing.title}</td>
                <td>
                  {" "}
                  <Link to={`/listing/${listing._id}`}>
                    <img
                      className="h-16 w-16 object-contain rouned-lg items-center "
                      src={listing.imageUrl[0]}
                      alt=""
                    />
                  </Link>
                </td>

                <td>{listing.address}</td>
                <td>{listing.regularPrice}</td>
                <td>{listing.discountPrice}</td>

                <td className="flex flex-col  items-center">
                  <button onClick={deleteListing} className="text-red-700">
                    Delete
                  </button>
                  <button onClick={deleteListing} className="text-green-700">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
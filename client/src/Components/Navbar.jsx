import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

export default function Navbar() {
  const navigate = useNavigate();
  const imgUrl =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  const user = sessionStorage.getItem("users");
  const admin = sessionStorage.getItem("admin");
  const isLoggedIn = user || admin;

  const { currentUser } = useSelector((state) => state.user);

  const logout = () => {
    sessionStorage.clear();
    toast.success(<div>Logout Sucessfully!! </div>, {
      theme: "colored",
      autoClose: 1000,
    });
    navigate("/");
  };

  return (
    <div>
      <header className="bg-slate-200 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <Link to="/">
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-slate-500">HamroSampati</span>
              <span className="text-slate-700">Realestate</span>
            </h1>
          </Link>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <FaSearch className="text-slate-600" />
          </form>
          <ul className="flex gap-4">
            <Link to="/">
              <li className="hiddem sm:inline text-slate-600 hover:underline">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="hiddem sm:inline text-slate-600 hover:underline">
                About
              </li>
            </Link>

            {user ? (
              <>
                <Link to="/createListing">
                  <li className=" text-slate-600 hover:underline">
                    Add Property
                  </li>
                </Link>
                <Link to="/profile">
                  <img
                    className="rounded-full h-7 w-7 object-cover"
                    src={currentUser.result.avatar || imgUrl}
                    alt=""
                  />
                </Link>
              </>
            ) : (
              <>
                {/* <Link to="/sign-in">
                  <li className=" text-slate-600 hover:underline">SignIn</li>
                </Link> */}
              </>
            )}

            {admin ? (
              <>
                <Link to="/admin-dash">
                  <img
                    className="rounded-full h-7 w-7 object-cover"
                    src={imgUrl}
                    alt=""
                  />
                </Link>

                <Link to="/log-out" onClick={logout}>
                  <li className=" text-slate-600 hover:underline">logout</li>
                </Link>
              </>
            ) : (
              <>
                {/* <Link to="/sign-in">
                  <li className=" text-slate-600 hover:underline">SignIn</li>
                </Link> */}
              </>
            )}

            {isLoggedIn ? null : (
              <Link to="/sign-in">
                <li className=" text-slate-600 hover:underline">SignIn</li>
              </Link>
            )}
          </ul>
        </div>
      </header>
    </div>
  );
}

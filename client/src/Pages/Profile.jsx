import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser.result.avatar);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile page</h1>
      <form className="flex flex-col gap-4">
        <img
          src={currentUser.result.avatar}
          alt=""
          className="rounded-full h-24 w-24 object-cover self-center mt-2"
        />

        <input
          className="border p-3 rounded-lg"
          type="text"
          id="username"
          placeholder="First Name"
          required
        />
        <input
          className="border p-3 rounded-lg "
          type="text"
          placeholder="Last Name"
          required
        />
        <input
          className="border p-3 rounded-lg "
          id="email"
          type="email"
          placeholder="Email"
          required
        />

        <button className="bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95">
          update
        </button>
      </form>

      <div className="flex justify-between mt-5">
        <span className="text-red-600 cursor-pointer">Delete Account</span>
        <span className="text-red-600 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}

import React from "react";
import { useSelector } from "react-redux";

export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser.result.avatar);

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile page</h1>
      <form className="flex flex-col">
        <img
          src={currentUser.result.avatar}
          alt=""
          className="rounded-full h-24 w-24 object-cover self-center mt-2"
        />

        <input className="border p-3 rounded-lg" type="text" placeholder="" />
      </form>
    </div>
  );
}

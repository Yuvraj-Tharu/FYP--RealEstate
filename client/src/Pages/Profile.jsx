import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
import {
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSucess,
} from "../redux/user/userSlice";
import { useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

export default function Profile() {
  const fileRef = useRef();
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { currentUser, loading } = useSelector((state) => state.user);
  const [sucessMessage, setSucessMessage] = useState();
  const [error, setError] = useState();
  // const navigate = useNavigate();

  useEffect(() => {
    if (file) {
      handelFileupload(file);
    }
  }, [file]);

  const handelFileupload = (file) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFilePercentage(Math.round(progress));
      },
      (error) => {
        console.log(error);
        setFileUploadError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFormData({ ...formData, avatar: downloadURL });
        });
      }
    );
  };

  const handelchange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match! Please try again");
      return;
    }

    try {
      dispatch(updateUserStart());
      const updateAPI = await fetch(
        `api/userProfileUpdate/${currentUser.result._id}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (!updateAPI.ok) {
        console.log("data update failed");
      }

      const result = await updateAPI.json();
      if (!result) {
        dispatch(updateUserFailure(error.message));
        console.log("response not found");
      } else {
        console.log("Update successful:", result);
        setSucessMessage("Update User Successful !!");
      }

      dispatch(updateUserSuccess(result));
    } catch (error) {
      dispatch(updateUserFailure(error.message));
      console.log("some thing went wrong", error);
    }
  };

  const deleteUser = async () => {
    try {
      dispatch(deleteUserStart());
      const deleteAPI = await fetch(
        `/api/userProfileDelete/${currentUser.result._id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      );

      if (deleteAPI.ok) {
        // Check if the response body is not empty
        const result =
          deleteAPI.headers.get("content-length") > 0
            ? await deleteAPI.json()
            : null;

        if (!result) {
          dispatch(deleteUserFailure("Failed to delete user."));
          return;
        }

        // navigate("/sign-in");
        dispatch(deleteUserSucess(result));
      } else {
        dispatch(deleteUserFailure("Failed to delete user."));
      }
    } catch (error) {
      console.log("something went wrong:", error);
      dispatch(deleteUserFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile page</h1>

      <form onSubmit={handelSubmit} className="flex flex-col gap-4">
        <input
          onChange={(e) => setFile(e.target.files[0])}
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
        />
        <img
          onClick={() => fileRef.current.click()}
          src={formData.avatar || currentUser.result.avatar}
          alt=""
          className="rounded-full h-24 w-24 object-cover self-center mt-2"
        />

        <p className="text-sm self-center">
          {fileUploadError ? (
            <span className="text-red-700">
              Error image upload (image must be less than 2 mb)
            </span>
          ) : filePercentage > 0 && filePercentage < 100 ? (
            <span className="text-green-600">{`uploading ${filePercentage}%`}</span>
          ) : filePercentage === 100 ? (
            <span className="text-green-600">Image successfully uploaded</span>
          ) : (
            ""
          )}
        </p>

        <input
          className="border p-3 rounded-lg "
          defaultValue={currentUser.result.firstName}
          onChange={handelchange}
          type="text"
          id="firstName"
          placeholder="First Name"
        />
        <input
          className="border p-3 rounded-lg "
          defaultValue={currentUser.result.lastName}
          onChange={handelchange}
          type="text"
          id="lastName"
          placeholder="Last Name"
        />
        <input
          className="border p-3 rounded-lg  "
          defaultValue={currentUser.result.email}
          onChange={handelchange}
          id="email"
          type="email"
          placeholder="Email"
          readOnly={true}
        />
        <input
          className="border p-3 rounded-lg "
          onChange={handelchange}
          id="password"
          type="password"
          placeholder="Password"
        />
        <input
          className="border p-3 rounded-lg "
          id="confirmPassword"
          onChange={handelchange}
          type="password"
          placeholder="Confirm Password"
        />

        <button
          disabled={loading}
          className="bg-orange-400 text-white rounded-lg p-3 uppercase hover:bg-slate-700"
        >
          {loading ? "Loading..." : "update"}
        </button>
        {error && (
          <p className="text-center text-xs text-red-700 mt-1">{error}</p>
        )}
        {sucessMessage && (
          <p className="text-center text-xs text-green-600 mt-1">
            {sucessMessage}
          </p>
        )}
      </form>

      <div className="flex justify-between mt-5">
        <span onClick={deleteUser} className="text-red-600 cursor-pointer">
          Delete Account
        </span>
        <span className="text-red-600 cursor-pointer">Sign out</span>
      </div>
    </div>
  );
}

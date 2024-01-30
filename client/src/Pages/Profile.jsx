import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase";
export default function Profile() {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser.result.avatar);
  const fileRef = useRef();
  const [file, setFile] = useState(undefined);
  const [filePercentage, setFilePercentage] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [formData, setFormData] = useState({});
  // console.log(file);
  // console.log(formData);
  // console.log(filePercentage);

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
        // console.log("upload " + progress + "% done");
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

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile page</h1>

      <form className="flex flex-col gap-4">
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
            <span>{`uploading ${filePercentage}`}</span>
          ) : filePercentage === 100 ? (
            <span className="text-green-600">Image sucessfully uploaded</span>
          ) : (
            ""
          )}
        </p>

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

import React, { useEffect, useState } from "react";

export default function ReplyChat() {
  const [user, setUser] = useState();
  const [message, setMessage] = useState();
  const [getId, setId] = useState(null);
  console.log(getId);

  useEffect(() => {
    fetchData();
    getAllMEssageData();
  }, []);

  const getAllMEssageData = async () => {
    try {
      let result = await fetch("/api/getdata");
      result = await result.json();
      setId(result.map((item) => item._id));
    } catch (error) {
      console.log("Something went wrong:", error);
    }
  };

  const fetchData = async (getId) => {
    try {
      let result = await fetch(`/api/getMessage/${getId}`);
      if (result) {
        result = await result.json();
        console.log(result);
      } else {
        console.log("result not found");
      }
    } catch (error) {
      console.log("sth went wrong", error);
    }
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="px-4 py-2 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800">Chat</h2>
          </div>

          <div className="p-4">
            <div className="flex mb-4">
              <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-gray-600">A</span>
              </div>
              <div className="ml-2 bg-blue-100 rounded-lg p-2">
                <p className="text-gray-800">Hello!</p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Type a message..."
                className="w-full rounded-full px-4 py-2 bg-gray-100 focus:outline-none focus:bg-white border border-gray-200"
              />
              <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

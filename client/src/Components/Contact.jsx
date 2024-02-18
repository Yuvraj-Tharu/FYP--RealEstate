import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Contact({ listing }) {
  const [owner, setOwner] = useState(null);
  const [message, setMessage] = useState("");

  // console.log("sdasda", owner);

  useEffect(() => {
    fetchOwner();
  }, [listing.userRef]);
  const fetchOwner = async () => {
    try {
      let result = await fetch(`/api/getUser/${listing.userRef}`);
      if (!result) {
        console.log("result not found");
      }

      result = await result.json();

      setOwner(result.result);
    } catch (error) {
      console.log("Internal  server error", error);
    }
  };

  console.log(message);
  const Handel = () => {};
  return (
    <>
      {owner && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold">{owner.firstName}</span>{" "}
            <span className="font-bold">{owner.lastName}</span> for{" "}
            <span className="font-bold">{listing.title.toLowerCase()}</span>
          </p>

          <textarea
            className="w-full border p-3  rounded-lg"
            name="message"
            id="message"
            rows="2"
            value={message}
            placeholder="Enter your message here ..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <Link
            className="bg-slate-700 p-3 my-2 text-white text-center uppercase rounded-lg hover:opacity-90"
            to={`mailto:${owner.email} ? subject=Regarding ${listing.title}&body=${message}`}
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}

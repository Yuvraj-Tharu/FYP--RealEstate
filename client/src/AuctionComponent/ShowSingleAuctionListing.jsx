import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ShowSingleAuctionListing() {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [remainingTime, setRemainingTime] = useState(null);
  const { currentUser } = useSelector((state) => state.user);
  const [winner, SetWinner] = useState();
  const navigate = useNavigate();

  SwiperCore.use([Navigation]);

  useEffect(() => {
    showData();
  }, [params.id]);

  useEffect(() => {
    if (listing) {
      const endTime = new Date(listing.endTime);
      calculateRemainingTime(endTime);

      const intervalId = setInterval(() => {
        calculateRemainingTime(endTime);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [listing]);

  const showData = async () => {
    try {
      setLoading(true);
      let result = await fetch(`/api/showSingleAuction/${params.id}`);

      if (!result) {
        setError(true);
        setLoading(false);
        return;
      }
      result = await result.json();
      setListing(result.result);
      setError(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  const calculateRemainingTime = (endTime) => {
    const now = new Date();
    const difference = endTime - now;
    if (difference > 0) {
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      setRemainingTime({ hours, minutes, seconds });
    } else {
      AuctionWinner();
      setRemainingTime(null);
    }
  };

  const AuctionWinner = async () => {
    try {
      let result = await fetch(`/api/getwinner/${params.id}`);
      if (!result) {
        console.log("result is not found");
      }
      result = await result.json();
      console.log("ss", result);
    } catch (error) {
      console.log("internal error", error);
    }
  };

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <main>
      {loading && <p className="text-center my-9 text-3xl">Loading...</p>}
      {error && (
        <p className="text-center my-9 text-3xl">Some thing went wrong</p>
      )}

      {listing && (
        <div>
          <Swiper navigation>
            {listing.imageUrl.map((url) => (
              <SwiperSlide key={url}>
                <div
                  className="h-[550px] "
                  style={{
                    background: `url(${url}) center no-repeat`,
                    backgroundSize: "cover",
                  }}
                ></div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>
          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link copied!
            </p>
          )}

          <div className="flex flex-col max-w-4xl mx-auto p-3 my-7 gap-4">
            <p className="text-2xl font-semibold  gap-4 ">
              {listing.title} - Rs {listing.MinimumPrice}
            </p>
            <p className="flex items-center mt-6 gap-2 text-slate-600  text-sm">
              <FaMapMarkerAlt className="text-green-700" />
              {listing.address}
            </p>

            <div className="flex gap-4"></div>
            <p className="text-slate-800">
              <span className="font-semibold text-black">Description - </span>
              {listing.description}
            </p>
            <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6">
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBed className="text-lg" />
                {listing.bedrooms > 1
                  ? `${listing.bedrooms} beds`
                  : `${listing.bedrooms} bed`}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaBath className="text-lg" />
                {listing.bathrooms > 1
                  ? `${listing.bathrooms} baths`
                  : `${listing.bathrooms} bath`}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaParking className="text-lg" />
                {listing.parking ? "Parking spot" : "No Parking"}
              </li>
              <li className="flex items-center gap-1 whitespace-nowrap ">
                <FaChair className="text-lg" />
                {listing.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>

            {remainingTime && (
              <div className="text-green-900 font-semibold text-sm">
                <p>
                  Time Remaining:{" "}
                  {`${formatTime(remainingTime.hours)}:${formatTime(
                    remainingTime.minutes
                  )}:${formatTime(remainingTime.seconds)}`}
                  &nbsp;|&nbsp; End Date:{" "}
                  {new Date(listing.endTime).toLocaleString()}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

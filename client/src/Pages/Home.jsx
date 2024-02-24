import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListingItem from "../Components/ListingItem";

export default function Home() {
  const [videoSource, setVideoSource] = useState(0);
  const [offerListing, setOfferListing] = useState([]);
  const [saleListing, setSaleListing] = useState([]);
  const [rentListing, setrentListing] = useState([]);
  const [landListing, setLandListing] = useState([]);
  console.log(offerListing);

  console.log(offerListing);

  const videos = [
    "/videos/video1.mp4",
    "/videos/video2.mp4",
    "/videos/video3.mp4",
    "/videos/video4.mp4",
  ];

  const changeVideo = () => {
    const nextSource = (videoSource + 1) % videos.length;
    setVideoSource(nextSource);
  };

  useEffect(() => {
    fetchOfferData();
  }, []);

  const fetchOfferData = async () => {
    try {
      let fetchData = await fetch("/api/searchListing/?offer=true&limit=3");
      fetchData = await fetchData.json();
      setOfferListing(fetchData);
      fetchRentData();
      // console.log(fetchData);
    } catch (error) {
      console.log("internal error: " + error);
    }
  };

  const fetchRentData = async () => {
    try {
      let fetchData = await fetch("/api/searchListing/?type=rent&limit=3");
      fetchData = await fetchData.json();
      setrentListing(fetchData);
      fetchSaleData();
    } catch (error) {
      console.log("internal error: " + error);
    }
  };

  const fetchSaleData = async () => {
    try {
      let fetchData = await fetch("/api/searchListing/?type=sale&limit=3");
      fetchData = await fetchData.json();
      setSaleListing(fetchData);
      fetchLandData();
    } catch (error) {
      console.log("internal error: " + error);
    }
  };

  const fetchLandData = async () => {
    try {
      let fetchData = await fetch("/api/searchListing/?type=land&limit=3");
      fetchData = await fetchData.json();
      setLandListing(fetchData);
    } catch (error) {
      console.log("internal error: " + error);
    }
  };

  return (
    <div className="">
      <div className="relative my-2 h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute top-[207px] left-0 w-full h-[647px] object-cover transform -translate-y-1/2 "
          src={videos[videoSource]}
          onClick={changeVideo}
        ></video>
      </div>
      <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center">
        <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl">
          Find your next <span className="text-slate-500">perfect</span>
          <br /> place with ease
        </h1>
        <div className="text-gray-400 text-xs sm:text-sm">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
          error perferendis deserunt officia, accusamus magni aut doloribus in
          ad, facilis ut odit. A possimus, dolorem perspiciatis dolore sunt
          harum soluta?
          <br />
          we have wide range of property
        </div>
        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-50 font-bold"
        >
          Let's get started ..
        </Link>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10">
        {offerListing && offerListing.length > 0 && (
          <div>
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-700 ">
                Recent Offer
              </h2>
              <Link
                className="text-sm text-blue-500  hover:underline"
                to={"/search?offer=true"}
              >
                Show more Offers
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {offerListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListing && saleListing.length > 0 && (
          <div>
            <div className="my-3 ">
              <h2 className="text-2xl font-semibold text-slate-700">
                Recent Places for Sale
              </h2>
              <Link
                className="text-sm text-blue-500 hover:underline"
                to={"/search?type=sale"}
              >
                Show more Places for Sale
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {saleListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListing && rentListing.length > 0 && (
          <div>
            <div className="my-3 ">
              <h2 className="text-2xl font-semibold text-slate-700">
                Recent Places for Rent
              </h2>
              <Link
                className="text-sm text-blue-500 hover:underline"
                to={"/search?type=rent"}
              >
                Show more Places for Rent
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {rentListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {landListing && landListing.length > 0 && (
          <div>
            <div className="my-3 ">
              <h2 className="text-2xl font-semibold text-slate-700 ">
                Recent Places for Land
              </h2>
              <Link
                className="text-sm text-blue-500 hover:underline"
                to={"/search?type=rent"}
              >
                Show more Places for Land
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {landListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ListingItem from "../Components/ListingItem";
import NewContainer from "./NewContainer";
export default function Home() {
  const [videoSource, setVideoSource] = useState(0);
  const [offerListing, setOfferListing] = useState([]);
  const [saleListing, setSaleListing] = useState([]);
  const [rentListing, setrentListing] = useState([]);
  const [landListing, setLandListing] = useState([]);

  const [adminofferListing, setAdminOfferListing] = useState([]);
  const [adminsaleListing, setAdminSaleListing] = useState([]);
  const [adminrentListing, setAdminrentListing] = useState([]);
  const [adminlandListing, setAdminLandListing] = useState([]);

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
      setOfferListing(fetchData.listing);
      setAdminOfferListing(fetchData.listing1);
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
      setrentListing(fetchData.listing);
      setAdminrentListing(fetchData.listing1);
      fetchSaleData();
    } catch (error) {
      console.log("internal error: " + error);
    }
  };

  const fetchSaleData = async () => {
    try {
      let fetchData = await fetch("/api/searchListing/?type=sale&limit=3");
      fetchData = await fetchData.json();
      setSaleListing(fetchData.listing);
      setAdminSaleListing(fetchData.listing1);
      fetchLandData();
    } catch (error) {
      console.log("internal error: " + error);
    }
  };

  const fetchLandData = async () => {
    try {
      let fetchData = await fetch("/api/searchListing/?type=land&limit=3");
      fetchData = await fetchData.json();
      setLandListing(fetchData.listing);
      setAdminLandListing(fetchData.listing1);
    } catch (error) {
      console.log("internal error: " + error);
    }
  };

  return (
    <div className="bg-[#FFFFFF] ">
      <div className="shape mt-10  ">
        <div className="shape-2  bg-slate-700  opacity-75  "></div>
        <div className="shape-3  bg-slate-700 opacity-75   "></div>
      </div>

      <NewContainer />
      <div className="p-4 min-h[100vh] mt-4">
        <div className="relative ml-[203px]  h-[500px] overflow-hidden z-20 rounded-xl p-5 w-[70%]">
          <video
            autoPlay
            loop
            muted
            className="absolute top-[207px] left-0 w-full h-[647px] object-cover transform -translate-y-1/2 rounded-xl  "
            src={videos[videoSource]}
            onClick={changeVideo}
          ></video>
        </div>
        <div className="movingText ml-[203px]  whitespace-nowrap overflow-x-auto uppercase mt-10 w-[70%]">
          <div className="con whitespace-nowrap inline-block">
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              Opening doors{" "}
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block">
              {" "}
            </div>{" "}
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              To your dreams
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block"></div>
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              one key at a time
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block"></div>
            &nbsp; &nbsp;&nbsp;
          </div>
          <div className="con whitespace-nowrap inline-block">
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              Opening doors{" "}
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block"></div>
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              To your dreams
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block"></div>
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              one key at a time
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block"></div>
            &nbsp; &nbsp;&nbsp;
          </div>
          <div className="con whitespace-nowrap inline-block">
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              Opening doors{" "}
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block"></div>
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              To your dreams
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block"></div>
            &nbsp; &nbsp;&nbsp;
            <h1 className="text-8xl font-semibold inline-block">
              one key at a time
            </h1>
            &nbsp; &nbsp;&nbsp;
            <div className="h-16 w-16 bg-slate-600 rounded-full inline-block"></div>
            &nbsp; &nbsp;&nbsp;
          </div>
        </div>

        <div className="bottom h-[60vh] w-[70%] ml-[178px] flex items-center justify-between p-[2vw] relative z-30 ">
          <h1 className="text-5xl w-[50%] relative z-10   ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus vel
            velit aspernatur consequatur aliquam sequi! Dicta ducimus in
            veritatis molestias. Expedita odit velit officiis praesenti
          </h1>
          <div className="bottom-2 w-[20%] ml-[400px]  ">
            {" "}
            <img
              className="w-full rounded-xl"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZhPxmbPhuLNbh2nNmh24-smTWxFzlqZTZW4eTGpGfSQ&s"
              alt=""
            />
            <p className="font-medium text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam
              deleniti tempora itaque obcaecati, nostrum natus impedit unde
              doloremque molestiae sed. Reiciendis nostrum vero totam hic.
              Mollitia maxime sapiente nisi repudiandae.
            </p>
          </div>

          <div className="z-0 ">
            <div className="Box1 h-[24vw] w-[24vw] bg-gradient-to-r from-slate-600 to- to-blue-300 absolute rounded-full left-[35%]  blur-[20px] z-0 opacity-50"></div>
            <div className="Box2 h-[24vw] w-[24vw] bg-gradient-to-r from-slate-600 to-blue-300 absolute rounded-full left-[35%]  blur-[20px] z-0 opacity-50"></div>
          </div>
        </div>

        {/* <div className="top-0 "> */}
        {/* </div> */}
      </div>

      <div className="absolute top-2/4 left-1/3 ml-40 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center  ">
        <h1 className="text-slate-700  font-bold text-3xl lg:text-6xl mr-[300px]">
          Find your next <span className="text-slate-500">perfect</span>
          <br /> place with ease
        </h1>
        <div className="shape  opacity-75 mr-[180px]  ">
          {/* <div className="shape-1 bg-slate-700  "></div> */}
          <div className="shape-2  bg-slate-700  w-[35vh] h-[35vh] opacity-65   "></div>
          <div className="shape-3  bg-slate-700  w-[35vh] h-[35vh] opacity-65 "></div>
        </div>
        <div className="text-slate-600 font-semibold text-xs sm:text-sm absolute text-justify mr-[200px]">
          Embark on a journey with us as we unlock the door to your dreams, one
          home at a time. Experience the transformative power of real estate,
          where each property becomes a chapter in the story of your life, and
          every key symbolizes new beginnings and endless possibilities. Let us
          guide you through this exciting adventure, turning your aspirations
          into reality, one door at a time. we have wide range of property
          <br />
          <Link
            to={"/search"}
            className=" text-xs sm:text-sm text-blue-50 font-bold hover:text-blue-50 ml-[200px]"
          >
            Let's get started ..
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10 z-50">
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
              {adminofferListing && adminofferListing.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {adminofferListing.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              )}
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

            <div className="flex flex-wrap gap-4 ">
              {saleListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
              {adminsaleListing && adminsaleListing.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {adminsaleListing.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              )}
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
              {adminrentListing && adminrentListing.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {adminrentListing.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              )}
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
                to={"/search?type=land"}
              >
                Show more Places for Land
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              {landListing.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
              {adminlandListing && adminlandListing.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {adminlandListing.map((listing) => (
                    <ListingItem listing={listing} key={listing._id} />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

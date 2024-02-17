import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import "swiper/css/bundle";

export default function Listing() {
  const params = useParams();
  const [loading, setLoding] = useState(false);
  const [listing, setListing] = useState(null);
  const [error, setError] = useState(false);
  SwiperCore.use([Navigation]);
  useEffect(() => {
    const showData = async () => {
      try {
        setLoding(true);
        let result = await fetch(`/api/getListing/${params.id}`);
        console.log(result.message);
        if (!result) {
          setError(true);
          setLoding(false);
          console.log();
          return;
        }
        result = await result.json();

        setError(false);
        setListing(result);
        setLoding(false);
      } catch (error) {
        setLoding(false);
        setError(true);
      }
    };
    showData();
  }, [params.id]);

  //   console.log(loading);
  console.log(listing);

  return (
    <div>
      {loading && <p className="text-center my-9 text-3xl">Loading...</p>}
      {error && (
        <p className="text-center my-9 text-3xl">some thing went wrong</p>
      )}

      {listing && !loading && (
        <>
          <Swiper navigation>
            {listing.data.imageUrl.map((url, index) => (
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
        </>
      )}
    </div>
  );
}
